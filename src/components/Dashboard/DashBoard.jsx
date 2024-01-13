import { Link, Outlet } from "react-router-dom";
import './DashBoard.css'
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const DashBoard = () => {
    const { user } = useContext(AuthContext);

    const [tag,setTag]=useState('');
    return (
        <div className="grid grid-cols-4">
            <div className="min-h-screen BgPrimary p-10">
                <div className="mb-10" onClick={()=>setTag('home')}>
                    <Link className={`${tag==='home'?'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 mt-5 cursor-pointer unique':'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 mt-5 cursor-pointer'}`} to='/'>Home</Link>
                </div>
                <div className="mb-10" onClick={()=>setTag('profile')}>
                    <Link className={`${tag==='profile'?'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 mt-5 cursor-pointer unique':'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 mt-5 cursor-pointer'}`} to={`/dashboard/profile/${user.email}`}>Profile</Link>
                </div>
                <div className="mb-10" onClick={()=>setTag('appointments')}>
                    <Link className={`${tag==='appointments'?'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 cursor-pointer unique':'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 cursor-pointer'}`} to='/dashboard/appointments'>Upcoming Appointments</Link>
                </div>
                <div className="mb-10" onClick={()=>setTag('results')}>
                    <Link className={`${tag==='results'?'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 cursor-pointer unique':'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 cursor-pointer'}`} to='/dashboard/test-results'>Test Results</Link>
                </div>
            </div>
            <div className="grid col-span-3">
                <h1 className="text-black font-bold text-5xl text-center mt-5">User DashBoard</h1>
                <Outlet></Outlet>
            </div>            
        </div>
    );
};

export default DashBoard;