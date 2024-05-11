import { FaAngleDoubleDown } from "react-icons/fa";
import AssignmentCard from "./../../Components/AssignmentCard/AssignmentCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Assignments = () => {
    const [allAssignment, setAllAssignment] = useState([])
    const [filter, setFilter] = useState('');
    
    useEffect(() => {
        const findAssignment = async () => {
            const response = await axios.get(`http://localhost:5000/all-assignment?difficulty=${filter}`);
            setAllAssignment(response.data);
        }
        findAssignment()
    },[filter])

    const handleFilterChange = newFilter => {
        setFilter(newFilter);
    };

    return (
        <div className="pt-24 mb-24">
            <div className="lg:max-w-6xl mx-auto">
            <div className="mx-auto flex w-full items-center justify-center pb-10">
        <div className="group relative cursor-pointer py-2">
          <div className="flex items-center justify-between space-x-5 bg-[#135D66] px-4">
            <a
              className="menu-hover my-2 py-2 text-base font-medium text-white lg:mx-4"
              onClick=""
            >
              Difficulty Level
            </a>
            <span>
              <FaAngleDoubleDown className="h-6 w-6 text-white"></FaAngleDoubleDown>
            </span>
          </div>

          <div className="invisible absolute z-50 flex w-full flex-col bg-[#003C43] py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
           

            <a onClick={() => handleFilterChange("Easy")} className="my-2 block border-b border-gray-100 py-1 font-semibold text-white hover:text-[#E3FEF7] md:mx-2">
              Easy
            </a>

            <a onClick={() => handleFilterChange("Medium")} className="my-2 block border-b border-gray-100 py-1 font-semibold text-white hover:text-[#E3FEF7] md:mx-2">
              Medium
            </a>

            <a onClick={() => handleFilterChange("Hard")} className="my-2 block border-b border-gray-100 py-1 font-semibold text-white hover:text-[#E3FEF7] md:mx-2">
              Hard
            </a>
          </div>
        </div>
      </div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-2">
                    
                {
                        allAssignment.map(newData => <AssignmentCard key={newData._id} newData={newData}></AssignmentCard>)
                    }
            
                </div>
            </div>
        </div>
    );
};

export default Assignments;

