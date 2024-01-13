import { useEffect, useState } from "react";
import TestCard from "./TestCard";

const AllTest = () => {
    const [allTests,setAllTest]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/all-tests')
        .then(res=>res.json())
        .then(data=>setAllTest(data))
    },[])

    return (
        <div className="overflow-x-auto">
            <h1 className="text-center text-5xl font-bold text-black mt-10 mb-5">All Avieleable Tests</h1>
            <table className="table">
                {/* head */}
                <thead className="BgPrimary text-black text-bold text-center text-base">
                    <tr>
                        <th>image</th>
                        <th>Test name</th>
                        <th>Date</th>
                        <th>Slot</th>
                        <th>Price</th>
                        <th>Details</th>
                    </tr>
                </thead>
                {
                    allTests.map(i=> <TestCard key={i._id} test={i}></TestCard>)
                }
            </table>
        </div>
    );
};

export default AllTest;