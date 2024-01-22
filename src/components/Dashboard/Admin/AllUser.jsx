import { useLoaderData } from "react-router-dom";
import AllUserCard from "./AllUserCard";

const AllUser = () => {
    const userCollection=useLoaderData();

    return (
        <div className="overflow-x-auto mt-10">
            <h1 className="text-left text-3xl font-bold text-black mb-5 ml-5">All Users:</h1>
            <table className="table">
                {/* head */}
                <thead className="BgPrimary text-black text-bold text-center text-base">
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Role</th>
                        <th>See Info</th>
                       
                    </tr>
                </thead>
                {
                    userCollection?.map(i=> <AllUserCard key={i._id} user={i}></AllUserCard>)
                }
            </table>
        </div>
    );
};

export default AllUser;