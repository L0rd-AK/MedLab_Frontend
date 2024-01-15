import { useLoaderData } from "react-router-dom";
import TestResultCard from "./TestResultCard";

const TestResults = () => {
    const TestResult=useLoaderData();
    return (
        <div className="overflow-x-auto">
            <h1 className="text-center text-5xl font-bold text-black mt-10 mb-5">Your Test Results</h1>
            <table className="table">
                {/* head */}
                <thead className="BgPrimary text-black text-bold text-center text-base">
                    <tr>
                        <th>image</th>
                        <th>Test name</th>
                        <th>Booked on</th>
                        <th>Date</th>
                        <th>Slot</th>
                        <th>Status</th>
                        <th>Report</th>
                    </tr>
                </thead>
                {
                    TestResult.map(i=> <TestResultCard key={i._id} test={i}></TestResultCard>)
                }
            </table>
        </div>
    );
};

export default TestResults;