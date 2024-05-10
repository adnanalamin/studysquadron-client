import { useContext } from "react";
import { AuthContext } from "./../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Lottie from "lottie-react";
import spiner from "./spiner.json";

const PrivetRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className=" flex h-screen items-center">
        <Lottie animationData={spiner} loop={true} />
      </div>
    );
  }
  if (user) {
    return children;
  }

    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>;
};
PrivetRouter.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default PrivetRouter;