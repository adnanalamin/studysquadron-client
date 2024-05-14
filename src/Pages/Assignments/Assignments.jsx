import { FaAngleDoubleDown } from "react-icons/fa";
import AssignmentCard from "./../../Components/AssignmentCard/AssignmentCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";

const Assignments = () => {
  const [allAssignment, setAllAssignment] = useState([]);
  const [filter, setFilter] = useState("");
  const { count } = useLoaderData();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPages] = useState(6);
  const [loading, setLoading] = useState(true);
  const numberOfPages = Math.ceil(count / itemsPerPage);

  console.log(numberOfPages);
  console.log(count);

  const pages = [...Array(numberOfPages).keys()];

  const handleAssaignmentCardDeleted = (_id) => {
    const newAssignment = allAssignment.filter((item) => item._id !== _id);
    setAllAssignment(newAssignment);
  };

  useEffect(() => {
    const findAssignment = async () => {
      const response = await axios.get(
        `https://studysquadron-server.vercel.app/all-assignment?difficulty=${filter}&page=${currentPage}&size=${itemsPerPage}`
      );
      setAllAssignment(response.data);
      setLoading(false)
    };
    findAssignment();
  }, [filter, currentPage, itemsPerPage]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handelItemsPerPages = (e) => {
    const val = parseInt(e.target.value);
    setItemsPerPages(val);
    setCurrentPage(0);
  };
  const handelPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handelNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="pt-24 mb-24">
      {loading && <Loader></Loader>}
      
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
              <a
                onClick={() => handleFilterChange("Easy")}
                className="my-2 block border-b border-gray-100 py-1 font-semibold text-white hover:text-[#E3FEF7] md:mx-2"
              >
                Easy
              </a>

              <a
                onClick={() => handleFilterChange("Medium")}
                className="my-2 block border-b border-gray-100 py-1 font-semibold text-white hover:text-[#E3FEF7] md:mx-2"
              >
                Medium
              </a>

              <a
                onClick={() => handleFilterChange("Hard")}
                className="my-2 block border-b border-gray-100 py-1 font-semibold text-white hover:text-[#E3FEF7] md:mx-2"
              >
                Hard
              </a>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-2 gap-y-4">
          {allAssignment.map((newData) => (
            <AssignmentCard
              key={newData._id}
              onCardDeleted={handleAssaignmentCardDeleted}
              newData={newData}
            ></AssignmentCard>
          ))}
        </div>
      </div>

      <div>
        <div className="bg-white dark:bg-black flex justify-center items-center w-screen mt-12 p-5">
          <div className="flex justify-center items-center mt-8">
            <button
              onClick={handelPrevPage}
              className="bg-transparent text-gray-700 dark:text-gray-200 font-semibold border border-gray-300 rounded-md px-2 py-1  focus:outline-none dark:border-none"
            >
              <FaAnglesLeft className="h-6 w-6 fill-current"></FaAnglesLeft>
            </button>
            <div className="flex mx-4 gap-2">
              {pages.map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={
                    currentPage === page
                      ? " bg-[#003C43] dark:text-gray-700 text-gray-200 font-semibold min-w-[40px] border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
                      : "bg-transparent text-gray-700 dark:text-gray-200 font-semibold min-w-[40px] border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
                  }
                >
                  {page + 1}
                </button>
              ))}
            </div>
            <button
              onClick={handelNextPage}
              className="bg-transparent text-gray-700 dark:text-gray-200 font-semibold border border-gray-300 rounded-md px-2 py-1 sfocus:outline-none dark:border-none"
            >
              <FaAnglesRight className="h-6 w-6  fill-current"></FaAnglesRight>
            </button>
            <span className="mx-4 dark:text-gray-400">Page</span>
            <select
              onChange={handelItemsPerPages}
              value={itemsPerPage}
              className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            >
              <option value="6">6</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
