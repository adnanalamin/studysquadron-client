import axios from "axios";
import { useContext, useEffect, useState } from "react";
import MyCard from "../../Components/MyCard/MyCard";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Loader from "../../Components/Loader/Loader";


const AttemptedAssignments = () => {
    const [data, setData] = useState([]);
    const {user} = useContext(AuthContext)
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchAssignment() {
          try {
            const response = await axios.get(
              `https://studysquadron-server.vercel.app/findsMyassignment/${user.email}`,
              {withCredentials: true }
            );
            setData(response.data);
            setLoading(false)
          } catch (error) {
            console.error("Error fetching assignment:", error);
          }
        }
        fetchAssignment();
      }, [user]);
    return (
        <div className="pt-24 mb-24">
          {loading && <Loader></Loader>}
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