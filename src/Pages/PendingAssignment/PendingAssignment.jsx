import axios from "axios";
import { useEffect, useState } from "react";


const PendingAssignment = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchAssignment() {
      try {
        const response = await axios.get(
          `http://localhost:5000/findstatusassignment/pending`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching assignment:", error);
      }
    }
    fetchAssignment();
  }, []);

  return (
   <div  className="pt-24 mb-24">
    <div className="lg:max-w-6xl mx-auto">
    <div className="flex flex-col overflow-x-auto lg:overflow-hidden">
  <div className="sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-x-auto">
        <table
          className="min-w-full text-start text-sm font-light text-surface dark:text-white">
          <thead
            className="border-b bg-[#003C43] border-neutral-200 font-medium dark:border-white/10">
            <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-[#E3FEF7] uppercase tracking-wider">Assignment Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-[#E3FEF7] uppercase tracking-wider">Assignment Marks</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-[#E3FEF7] uppercase tracking-wider">Examinee Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-[#E3FEF7] uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-[#E3FEF7] uppercase tracking-wider">Action</th>
        </tr>
          </thead>
          <tbody>
          {
            data.map(newData => <tr key={newData._id}>
              <td className="px-6 py-4 whitespace-nowrap">{newData.assignmentTitle}</td>
              <td className="px-6 py-4 whitespace-nowrap">{newData.assignmentMarks}</td>
              <td className="px-6 py-4 whitespace-nowrap">{newData.userName}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{newData.status}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                  <button className="px-4 py-2 font-medium text-white bg-[#135D66] rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">give mark</button>
              </td>
          </tr>)
          }
          
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
   </div>
  );
};

export default PendingAssignment;



