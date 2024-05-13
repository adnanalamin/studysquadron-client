import axios from "axios";
import { useEffect, useState } from "react";
import MyCard from "../../Components/MyCard/MyCard";


const AttemptedAssignments = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchAssignment() {
          try {
            const response = await axios.get(
              `http://localhost:5000/findstatusassignment/completed`
            );
            setData(response.data);
          } catch (error) {
            console.error("Error fetching assignment:", error);
          }
        }
        fetchAssignment();
      }, []);
    return (
        <div className="pt-24 mb-24">
      <div className="lg:max-w-6xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-5">
          {
            data.map(item => <MyCard key={item._id} item={item} ></MyCard>)
          }
        </div>
      </div>
     
    </div>
    );
};

export default AttemptedAssignments;