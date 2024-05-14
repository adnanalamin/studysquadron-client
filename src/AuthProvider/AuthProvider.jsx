import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login

  const userSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // LogOut

  // const userLogout = () => {
  //   setLoading(true);
  //   return signOut(auth);
  // };

  const userLogout = async () => {
    setLoading(true)
    const { data } = await axios('https://studysquadron-server.vercel.app/logout', {
      withCredentials: true,
    })
    console.log(data)
    return signOut(auth)
  }

  // Google Login

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Github Login

  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // Update Profile

  const updateUserProfile = (userName, photourl) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: photourl,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    userSignIn,
    userLogout,
    googleLogin,
    githubLogin,
    updateUserProfile,
  };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
export default AuthProvider;