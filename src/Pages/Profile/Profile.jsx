import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchAssignment() {
      try {
        const response = await axios.get(
          `https://studysquadron-server.vercel.app/findsMyassignment/${user.email}`,
          { withCredentials: true }
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching assignment:", error);
      }
    }
    fetchAssignment();
  }, [user]);
  return (
    <div className="pt-24 mb-24">
      <div className="lg:max-w-6xl mx-auto">
        <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
          <div
            id="profile"
            className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
          >
            <div className="p-4 md:p-12 text-center lg:text-left">
              <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"></div>

              <h1 className="text-3xl font-bold pt-8 lg:pt-0">
                {user.displayName}
              </h1>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
              <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                Email: {user.email}
              </p>
              <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                Total Assignment: {data.length}
              </p>
            </div>
          </div>

          <div className="w-full lg:w-2/5">
            <img
              src={user.photoURL}
              className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
