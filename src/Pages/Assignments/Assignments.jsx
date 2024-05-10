
import AssignmentCard from "./../../Components/AssignmentCard/AssignmentCard";

const Assignments = () => {
    return (
        <div className="pt-24 mb-24">
            <div className="lg:max-w-6xl mx-auto">
                <div className="lg:grid lg:grid-cols-2 lg:gap-2">
                <AssignmentCard></AssignmentCard>
            <AssignmentCard></AssignmentCard>
            <AssignmentCard></AssignmentCard>
            <AssignmentCard></AssignmentCard>
                </div>
            </div>
        </div>
    );
};

export default Assignments;