import PropTypes from "prop-types";
const AssignmentCard = ({newData}) => {
  const {title, marks, thumbnailimage, difficultyLevel} = newData;
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:max-w-2xl max-w-xs mx-auto overflow-hidden bg-[#135D66] rounded-lg shadow-lg dark:bg-gray-800 p-2">
        <div className="p-2 h-96 sm:w-1/2">
          <img
            className="rounded object-cover w-full sm:h-full h-full"
            src={thumbnailimage}
            alt="Article"
          />
        </div>
        <div className="sm:p-4 p-2 sm:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="block sm:mt-2 text-2xl font-semibold text-gray-50 dark:text-white ">
              {title}
            </h2>
            <h2 className="block sm:mt-2 text-2xl font-semibold text-gray-50 dark:text-white ">
              Marks : {marks}
            </h2>
            <h2 className="block sm:mt-2 text-2xl font-semibold text-gray-50 dark:text-white ">
              level: {difficultyLevel}
            </h2>
          </div>

          <div className="mt-4">
            <div className="w-full">
              <button className="btn btn-info w-full">view assignment</button>
            </div>
            <div className="w-full mt-4">
              <button className="btn btn-warning w-full">update</button>
            </div>
            <div className="w-full mt-4">
              <button className="btn btn-error w-full">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 

AssignmentCard.propTypes = {
  newData: PropTypes.object.isRequired,
};
export default AssignmentCard;
