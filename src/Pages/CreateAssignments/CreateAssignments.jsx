import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateAssignments = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="pt-16">
      <div className=" w-screen h-screen bg-white dark:bg-black">
        <div className="container mx-auto my-4 px-4 lg:px-20 ">
          <div className="bg-[#135D66] dark:bg-[#222831] p-8 my-4 md:px-12 w-full lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl text-[#77B0AA] dark:text-white">
                Create assignment
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Assignment Title"
              />
              <input
                className="w-full bg-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Assignment Marks"
              />
              <select
                id="hs-hidden-select"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3  focus:outline-none focus:shadow-outline py-3 px-4 pe-9 block  border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              >
                <option selected="">Assignment Difficulty Level</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>

              <DatePicker
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="my-4">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                type="email"
                placeholder="Thumbnail Image URL"
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Description"
                className="w-full h-32 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button className="uppercase text-sm font-bold tracking-wide bg-[#003C43] text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline dark:bg-[#0C0C0C]">
                Create assignment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignments;
