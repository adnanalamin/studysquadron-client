const AssignmentCard = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:max-w-2xl max-w-xs mx-auto overflow-hidden bg-gray-700 rounded-lg shadow-lg dark:bg-gray-800 p-2">
        <div className="p-2 sm:w-1/2">
          <img
            className="rounded object-cover w-full sm:h-80 h-60"
            src="https://i.pinimg.com/564x/41/c7/52/41c75274ffa14f3222691c0cbe3c1904.jpg"
            alt="Article"
          />
        </div>
        <div className="sm:p-4 p-2 sm:w-1/2 flex flex-col justify-between">
          <div>
            <a
              href="#"
              className="block sm:mt-2 text-2xl font-semibold text-gray-50 dark:text-white hover:text-gray-600 hover:underline"
            >
              Lorem rem facere
            </a>
            <p className="mt-2 text-sm text-gray-200 dark:text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              labore, cum rem facere obcaecati beatae sunt numquam architecto
              delectus dignissimos explicabo quod pariatur at consequatur sint
              esse aut Facere. Numquam architecto delectus dignissimos
            </p>
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <img
                  className="object-cover h-10 w-10 rounded-full"
                  src="https://i.pinimg.com/564x/1d/1e/16/1d1e16ad5227a9c726b61bd7cc4eca33.jpg"
                  alt="Avatar"
                />
                <a
                  href="#"
                  className="mx-2 font-semibold text-gray-50 dark:text-gray-200"
                >
                  Tocino Code
                </a>
              </div>
              <span className="mx-1 text-xs text-gray-400 dark:text-gray-300">
                21 SEP 2015
              </span>
              <span className="hover:cursor-pointer relative sm:left-12 text-xs text-gray-400 dark:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f2f2f2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
