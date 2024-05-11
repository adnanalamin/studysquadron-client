import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AssignmentDetails = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    async function fetchAssignment() {
      try {
        const response = await axios.get(
          `http://localhost:5000/findassignment/${id}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching assignment:", error);
      }
    }
    fetchAssignment();
  }, [id]);
  return (
    <div className="pt-24 mb-24">
      <div className="bg-[#135D66] dark:bg-gray-800 py-8 lg:max-w-6xl mx-auto rounded-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={data.thumbnailimage}
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                    className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    Take Assignment
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-[#E3FEF7] dark:text-white mb-2">
                {data.title}
              </h2>

              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-[#E3FEF7] dark:text-gray-300">
                    Marks:
                  </span>
                  <span className="text-[#E3FEF7] dark:text-gray-300">
                    {data.marks}
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-[#E3FEF7] dark:text-gray-300">
                  Assignment Difficulty Level:
                </span>
                <span className=" text-[#E3FEF7] dark:text-gray-300">
                  {data.difficultyLevel}
                </span>
              </div>
              <div className="mb-4">
                <span className="font-bold text-[#E3FEF7] dark:text-gray-300">
                  Due Date:
                </span>
                <span className=" text-[#E3FEF7] dark:text-gray-300">
                  {data.dueDate}
                </span>
              </div>
              <div>
                <span className="font-bold text-[#E3FEF7] dark:text-gray-300">
                  Assignment Description:
                </span>
                <p className="text-[#E3FEF7] dark:text-gray-300 text-sm mt-2">
                  {data.description}
                </p>
              </div>
              <figcaption className="font-medium bg-[#E3FEF7] px-5 py-5 rounded mt-6 dark:bg-gray-600">
                <div className="text-sky-500 dark:text-sky-400">
                  {data.email}
                </div>
                <div className="text-slate-700 dark:text-slate-400">
                  {data.userName}
                </div>
              </figcaption>
            </div>
          </div>
        </div>
      </div>

      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box bg-[#135D66] dark:bg-gray-700">
          <div className="w-full mx-auto pt-6">
            <form action="">
              <div className="w-full">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="mb-4 file-input file-input-bordered w-full"
                />
              </div>
              <div>
                <textarea
                  placeholder="Bio"
                  className="textarea textarea-bordered textarea-md w-full"
                ></textarea>
              </div>
              <div className="w-full mt-3">
                <button className="btn bg-[#003C43] dark:bg-gray-600 hover:bg-[#003C43] text-white border-none w-full">Submit</button>
              </div>
            </form>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm btn-circle text-white btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AssignmentDetails;
