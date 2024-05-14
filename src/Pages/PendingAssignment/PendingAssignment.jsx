import axios from "axios";
import {  useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loader from "../../Components/Loader/Loader";

const PendingAssignment = () => {
  const [data, setData] = useState([]);
  const [fileUrl, setFileUrl] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAssignment() {
      try {
        const response = await axios.get(
          `https://studysquadron-server.vercel.app/findstatusassignment/pending`,
          {withCredentials: true }
        );
        setData(response.data);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching assignment:", error);
      }
    }
    fetchAssignment();
  }, []);

  const openModal = (data) => {
    setFileUrl(data);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const number = event.target.number.value;
    const assignmentFeedback = event.target.assignmentFeedback.value;
    
    const status = "completed";
    const id = fileUrl._id;
    console.log(id)
    

    if (!number || !assignmentFeedback) {
      toast.error("Please provide both number and feedback.");
      return;
    }

    const newSubmission = {
      number,
      assignmentFeedback,
      status,
    };

    try {
      await axios.put(
        `https://studysquadron-server.vercel.app/updateassignmentmark/${id}`,
        newSubmission
      );

      // if (response.data.insertedId) {
        toast.success("Assignment submitted successfully");
      // }
      event.target.reset();
      closeModal();
    } catch (error) {
      console.error("Error submitting assignment:", error);
      toast.error("Failed to submit assignment. Please try again later.");
    }
  };


  return (
    <div className="pt-24 mb-24">
      
      <div className="lg:max-w-6xl mx-auto">
        <div className="flex flex-col overflow-x-auto lg:overflow-hidden">
          <div className="sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-x-auto">
                <table className="min-w-full text-start text-sm font-light text-surface dark:text-white">
                  <thead className="border-b bg-[#003C43] dark:bg-[#31363F] border-neutral-200 font-medium dark:border-white/10">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-bold  text-[#E3FEF7] dark:text-[#DFF5FF] uppercase tracking-wider">
                        Assignment Title
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold  text-[#E3FEF7] dark:text-[#DFF5FF] uppercase tracking-wider">
                        Assignment Marks
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold  text-[#E3FEF7] dark:text-[#DFF5FF] uppercase tracking-wider">
                        Examinee Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold  text-[#E3FEF7] dark:text-[#DFF5FF] uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold  text-[#E3FEF7] dark:text-[#DFF5FF] uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  {loading && <Loader className='w-full mx-auto'></Loader>}
                  <tbody>
                    {data.map((assignment, index) => (
                      <tr
                        key={assignment._id}
                        style={{
                          backgroundColor:
                            index % 2 === 0 ? "#B3C8CF" : "#BED7DC",
                        }}
                      >
                        <td className="px-6 py-4 whitespace-nowrap dark:text-[#240A34] font-semibold ">
                          {assignment.assignmentTitle}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap dark:text-[#240A34] font-semibold ">
                          {assignment.assignmentMarks}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap dark:text-[#240A34] font-semibold ">
                          {assignment.userName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap dark:text-[#240A34] font-semibold ">
                          <span className="px-2 inline-flex text-xs   leading-5 font-semibold rounded-full bg-[#FF0080] dark:bg-[#31363F] dark:text-white text-[#CDE8E5]">
                            {assignment.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          
                          <button
                            onClick={() => openModal(assignment)}
                            className="px-4 py-2 font-medium text-white bg-[#135D66] rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
                          >
                            Give Mark
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="modal-box w-11/12 max-w-5xl overflow-hidden h-3/4 bg-[#135D66] dark:bg-gray-700">
            <button
              onClick={closeModal}
              className="btn btn-sm btn-circle text-white btn-ghost absolute right-2 top-6"
            >
              ✕
            </button>
            <div className="flex lg:flex-row flex-col h-full pt-10">
              <iframe className="lg:w-1/2 w-full" src={fileUrl.file}></iframe>
              <form onSubmit={handleSubmit} className="lg:w-1/2 w-full lg:ml-6">
                
                <div className="bg-[#E3FEF7]  rounded-lg mb-6 px-4 py-4">
                <div className="w-4/5 h-auto">
                <h1 className="font-bold text-lg">Note:</h1>
                
                <div className="w-full">
                <p className="font-semibold text-sm block overflow-hidden whitespace-pre-wrap ">{fileUrl.assignmentnote}</p>
                </div>
                </div>
                </div>
                <div className="w-full">
                  <input
                    type="number"
                    name="number"
                    className="mb-4 file-input file-input-bordered w-full"
                  />
                </div>
                <div>
                  
                  <textarea
                    placeholder="quick note"
                    name="assignmentFeedback"
                    className="textarea textarea-bordered textarea-md w-full"
                  ></textarea>
                </div>
                <div className="w-full mt-3">
                  <button className="btn bg-[#003C43] dark:bg-gray-600 hover:bg-[#003C43] text-white border-none w-full">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingAssignment;
