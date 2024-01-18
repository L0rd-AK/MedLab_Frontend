import { useLoaderData } from "react-router-dom";
import AllTeastasCard from "./AllTeastasCard";

const AllTeastas = () => {
    const TestResult=useLoaderData();
    return (
        <div className="overflow-x-auto">
            <h1 className="text-center text-5xl font-bold text-black mt-10 mb-5">Manage All Tests</h1>
            <table className="table">
                {/* head */}
                <thead className="BgPrimary text-black text-bold text-center text-base">
                    <tr>
                        <th>image</th>
                        <th>Test name</th>
                        <th>Added on</th>
                        <th>Slot</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {
                    TestResult.map(i=> <AllTeastasCard key={i._id} test={i}></AllTeastasCard>)
                }
            </table>
        </div>
    );
};

export default AllTeastas;