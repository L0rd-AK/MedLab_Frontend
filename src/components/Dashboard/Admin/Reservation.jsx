import { useEffect, useState } from "react";
import ReservationCARD from "./ReservationCARD";

const Reservation = () => {
    const [allTestCollection,setallTestCollection]=useState(null);
    useEffect(()=>{
        fetch(`http://localhost:5000/appointments`)
        .then(res=>res.json())
        .then(data=>{
            setallTestCollection(data);
            console.log(allTestCollection);
        })
    },[allTestCollection])
    return (
        <div className="overflow-x-auto">
            <h1 className="text-center text-5xl font-bold text-black mt-10 mb-5">All Reservations:</h1>
            <table className="table">
                {/* head */}
                <thead className="BgPrimary text-black text-bold text-center text-base">
                    <tr>
                        <th>image</th>
                        <th>Test name</th>
                        <th>User Mail</th>
                        <th>Booked on</th>
                        <th>Result</th>
                        <th>Cancle</th>
                    </tr>
                </thead>
                {
                    allTestCollection?.map(i=> <ReservationCARD key={i._id} test={i}></ReservationCARD>)
                }
            </table>
        </div>
    );
};

export default Reservation;