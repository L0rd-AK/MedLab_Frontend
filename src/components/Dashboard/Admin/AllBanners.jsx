import { useLoaderData } from "react-router-dom";
import BannerCard from "./BannerCard";

const AllBanners = () => {
    const TestResult=useLoaderData();
    return (
        <div className="overflow-x-auto">
            <h1 className="text-center text-5xl font-bold text-black mt-10 mb-5">Manage All Tests</h1>
            <table className="table">
                {/* head */}
                <thead className="BgPrimary text-black text-bold text-center text-base">
                    <tr>
                        <th>image</th>
                        <th>Banner Title</th>
                        <th>Coupon Code</th>
                        <th>Coupon Rate</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {
                    TestResult.map(i=> <BannerCard key={i._id} test={i}></BannerCard>)
                }
            </table>
        </div>
    );
};

export default AllBanners;