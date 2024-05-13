import PropTypes from "prop-types";

const MyCard = ({ item }) => {
  const {
    assignmentTitle,
    status,
    assignmentMarks,
    number,
    assignmentFeedback,
  } = item;
  return (
    <div>
      <div className="bg-[#135D66] dark:bg-gray-800 max-w-2xl shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-white">
            {assignmentTitle}
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-[#9AC8CD] dark:bg-[#35374B] px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 dark:text-white">
                Assignment Name
              </dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                {assignmentTitle}
              </dd>
            </div>
            <div className="bg-[#E1F7F5] dark:bg-[#344955] px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 dark:text-white">
                Assignment Status
              </dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                {status}
              </dd>
            </div>
            <div className="bg-[#9AC8CD] dark:bg-[#35374B] px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 dark:text-white">
                Assignment Marks
              </dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                {assignmentMarks}
              </dd>
            </div>
            <div className="bg-[#E1F7F5] dark:bg-[#344955] px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 dark:text-white">
                Your obtained marks
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 dark:text-white sm:col-span-2">
                {number}
              </dd>
            </div>
            <div className="bg-[#9AC8CD] dark:bg-[#35374B] px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 dark:text-white">
                Assignment Feedback
              </dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                {assignmentFeedback}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};
MyCard.propTypes = {
  item: PropTypes.object.isRequired,
};
export default MyCard;
