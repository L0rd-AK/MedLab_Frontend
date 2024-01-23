import { useContext, useEffect, useState } from "react";
import TestCard from "./TestCard";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const AllTest = () => {
    const { user} = useContext(AuthContext);
    const [allTests, setAllTest] = useState([]);
    const [machedUser,setmachedUser]=useState(null);
    console.log(machedUser);
    useEffect(() => {
        fetch(`https://backend-server-gamma.vercel.app/users/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setmachedUser(data)
        })
    }, [user.email])
    useEffect(() => {
        fetch('https://backend-server-gamma.vercel.app/all-tests',{
            method:'GET',
            headers: {
              authorization: localStorage.getItem('access-token'),
            },
        })
        .then(res => res.json())
        .then(data => setAllTest(data))
    }, [])

    return (
        <>
            {
                machedUser?.status ?
                    <>
                        <div className="flex flex-col  min-h-screen text-center mt-16">
                            <h1 className="text-3xl font-bold">This user Has been blocked <br /> by Admin</h1>
                            <Link to={`/`}>
                                <button className="btn BgPrimary mt-5">Go back</button>
                            </Link>
                        </div>
                    </> :
                    <>
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
                                    allTests.map(i => <TestCard key={i._id} test={i}></TestCard>)
                                }
                            </table>
                        </div>
                    </>
            }
        </>
    );
};

export default AllTest;