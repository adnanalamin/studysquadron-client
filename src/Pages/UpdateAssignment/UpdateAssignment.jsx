import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Toaster } from "react-hot-toast";

const UpdateAssignment = () => {
  const [dueDate, setDueDate] = useState(new Date());
  const [difficultyLevel, setDifficultyLevel] = useState();
  const [defaultData, setDefaultData] = useState({});
  console.log(defaultData);
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchAssignment() {
      try {
        const response = await axios.get(
          `https://studysquadron-server.vercel.app/findassignment/${id}`
        );
        setDefaultData(response.data);

        if (response.data.dueDate) {
          setDueDate(new Date(response.data.dueDate));
        }
        setDifficultyLevel(response.data.difficultyLevel);
        
      } catch (error) {
        console.error("Error fetching assignment:", error);
      }
    }
    fetchAssignment();
  }, [id]);

  const handelDifficultyChange = (e) => {
    setDifficultyLevel(e.target.value);
  };
  const handelCreateAssignment = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const marks = e.target.marks.value;
    const description = e.target.description.value;
    const thumbnailimage = e.target.thumbnailimage.value;

    const updateAssignmentItem = {
      title,
      marks,
      description,
      thumbnailimage,
      dueDate,
      difficultyLevel,
    };
    try {
      await axios.put(
        `https://studysquadron-server.vercel.app/updateassignment/${id}`,
        updateAssignmentItem
      );
      
        toast.success("Assignment Update Successfully");
        navigate('/assignments')
     
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="pt-24 mb-24">
      <div className=" w-screen h-screen bg-white dark:bg-black">
        <div className="container mx-auto my-4 px-4 lg:px-20 ">
          <div className="bg-[#135D66] dark:bg-[#222831] p-8 my-4 md:px-12 w-full lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl text-[#77B0AA] dark:text-white">
                Update assignment
              </h1>
            </div>
            <form onSubmit={handelCreateAssignment}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <div>
                  <input
                    className="w-full bg-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Assignment Title"
                    name="title"
                    defaultValue={defaultData.title || ""}
                  />
                </div>

                <div>
                  <input
                    className="w-full bg-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="number"
                    placeholder="Assignment Marks"
                    name="marks"
                    defaultValue={defaultData.marks || ""}
                  />
                </div>
                <div>
                  <select
                    id="hs-hidden-select"
                    value={difficultyLevel}
                    onChange={handelDifficultyChange}
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3  focus:outline-none focus:shadow-outline py-3 px-4 pe-9 block  border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  >
                    <option
                      value="Assignment Difficulty Level"
                      disabled
                      selected
                    >
                      Assignment Difficulty Level
                    </option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>

                <DatePicker
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  selected={dueDate || 0}
                  onChange={(date) => setDueDate(date)}
                />
              </div>
              <div className="my-4">
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  type="text"
                  placeholder="Thumbnail Image URL"
                  name="thumbnailimage"
                  defaultValue={defaultData.thumbnailimage || ""}
                />
              </div>
              <div className="my-4">
                <textarea
                  placeholder="Description"
                  defaultValue={defaultData.description || ""}
                  name="description"
                  className="w-full h-32 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <div className="my-2 w-1/2 lg:w-1/4">
                <button className="btn uppercase text-sm font-bold tracking-wide bg-[#003C43] text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline dark:bg-[#0C0C0C]">
                  Update assignment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default UpdateAssignment;
