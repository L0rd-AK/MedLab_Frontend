import { useEffect, useState } from "react";
import ReservationCARD from "./ReservationCARD";

const Reservation = () => {
    const [allTestCollection, setallTestCollection] = useState([]);
    useEffect(() => {
        fetch(`https://backend-server-gamma.vercel.app/appointments`,{
            method:'GET',
            headers: {
              authorization: localStorage.getItem('access-token'),
            },
        })
            .then(res => res.json())
            .then(data => {
                setallTestCollection(data);
                // console.log(allTestCollection);
            })
    }, [])


    const handelSearch = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const searchValue = form.get('home-input');
        console.log(searchValue);
        fetch(`https://backend-server-gamma.vercel.app/appointments/${searchValue}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setallTestCollection(data);
            })
    }
    return (
        <>
            <div className="overflow-x-auto">
                <h1 className="text-center text-5xl font-bold text-black mt-10 mb-5">All Reservations:</h1>
                <form className="text-center" onSubmit={handelSearch}>
                    <input name="home-input" type="text" placeholder="Search by user email..." className="input input-bordered input-accent w-full max-w-xs bg-transparent" />
                    <button className="btn BgPrimary px-5 py-2 border-none font-bold text-white hover:btn-outline mt-5 mb-5 ml-5">Search</button>
                </form>
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
                        allTestCollection.map(i => <ReservationCARD key={i._id} test={i}></ReservationCARD>)
                    }
                </table>
            </div>
        </>
    );
};

export default Reservation;