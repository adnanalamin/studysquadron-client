import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateAssignments = () => {
  const [dueDate, setDueDate] = useState(new Date());
  const [difficultyLevel, setDifficultyLevel] = useState();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()

  const handelDifficultyChange = (e) => {
    setDifficultyLevel(e.target.value);
  };
  const handelCreateAssignment = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const marks = e.target.marks.value;
    const description = e.target.description.value;
    const thumbnailimage = e.target.thumbnailimage.value;
    const email = user.email;
    const userName = user.displayName;

    
    if (isNaN(marks) || marks === '') {
      toast.error("Please fill out all required fields")
      return; 
    } else if (parseInt(marks) >= 100) {
      toast.error("Marks must be less than 100")
      return; 
    }
  
    
    if (!title) {
      toast.error("Please fill out all required fields")
      return; 
    }
    if (!description) {
      toast.error("Please fill out all required fields")
      return; 
    }
    if (!thumbnailimage) {
      toast.error("Please fill out all required fields")
      return; 
    }


    const assignment = {
      title,
      marks,
      description,
      thumbnailimage,
      dueDate,
      difficultyLevel,
      email,
      userName,
    };
    console.log(assignment);
    
    fetch("https://studysquadron-server.vercel.app/assignment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(assignment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success",
            text: "Assignment will be created successfully",
            icon: "success",
          });
          setDueDate(new Date());
          setDifficultyLevel(null);
          e.target.reset();
          navigate('/assignments')
        }
      });
  };
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
            <form onSubmit={handelCreateAssignment}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <div>
                  <input
                    className="w-full bg-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Assignment Title"
                    name="title"
                  />
                  
                </div>

                <div>
                  <input
                    className="w-full bg-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="number"
                    placeholder="Assignment Marks"
                    name="marks"
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
                />
                
              </div>
              <div className="my-4">
                <textarea
                  placeholder="Description"
                  name="description"
                  className="w-full h-32 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                ></textarea>
                
              </div>
              <div className="my-2 w-1/2 lg:w-1/4">
                <button className="btn uppercase text-sm font-bold tracking-wide bg-[#003C43] text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline dark:bg-[#0C0C0C]">
                  Create assignment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignments;
