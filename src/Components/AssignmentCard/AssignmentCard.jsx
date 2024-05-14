import PropTypes from "prop-types";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
const AssignmentCard = ({ newData, onCardDeleted }) => {
  const { user } = useContext(AuthContext);
  const { _id, title, marks, thumbnailimage, difficultyLevel, email } = newData;
  const handelDelete = (email) => {
    const userEmail = user.email;
    if (email === userEmail) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't to delete this assignment",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://studysquadron-server.vercel.app/delete-assignment/${email}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your Your Assignment has been deleted.",
                  icon: "success",
                });
                onCardDeleted(_id);
              }
            });
        }
      });
    } else {
      Swal.fire({
        title: "Permission Denied",
        text: " You can only delete assignments created by yourself",
        icon: "error",
      });
      return;
    }
  };
  return (
    <div>
      <div className="flex flex-col h-[400px] sm:flex-row sm:max-w-2xl max-w-xs mx-auto overflow-hidden bg-[#135D66] rounded-lg shadow-lg dark:bg-gray-800 p-2">
        <div className="p-2 h-96 sm:w-1/2">
          <img
            className="rounded object-cover w-full sm:h-full h-full"
            src={thumbnailimage}
            alt="Article"
          />
        </div>
        <div className="sm:p-4 p-2 sm:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="block sm:mt-2 text-xl font-semibold text-gray-50 dark:text-white ">
              {title}
            </h2>
            <h2 className="block sm:mt-2 text-lg font-semibold text-gray-50 dark:text-white ">
              Marks : {marks}
            </h2>
            <h2 className="block sm:mt-2 text-lg font-semibold text-gray-50 dark:text-white ">
              level: {difficultyLevel}
            </h2>
          </div>

          <div className="mt-4">
            <div className="w-full">
              <Link to={`/AssignmentDetails/${_id}`}>
              <button className="btn btn-info w-full">view assignment</button>
              </Link>
              
            </div>
            <div className="w-full mt-4">
              <Link to={`/UpdateAssignment/${_id}`}>
              <button  className="btn btn-warning w-full">update</button>
              </Link>
              
            </div>
            <div className="w-full mt-4">
              <button
                onClick={() => handelDelete(email)}
                className="btn btn-error w-full"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AssignmentCard.propTypes = {
  newData: PropTypes.object.isRequired,
  onCardDeleted: PropTypes.func,
};
export default AssignmentCard;
