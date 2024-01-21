import { Link, Outlet, useLoaderData } from "react-router-dom";
import './DashBoard.css'
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const DashBoard = () => {
    const { user } = useContext(AuthContext);
    const userCollection = useLoaderData();
    const machedUser = userCollection.find(i => i.email === user.email);
    console.log(machedUser);
    const [tag, setTag] = useState('');
    return (
        <>
            {
                machedUser.status ?
                    <>
                        <div className="flex flex-col  min-h-screen text-center mt-16">
                            <h1 className="text-3xl font-bold">This user Has been blocked <br /> by Admin</h1>
                            <Link to={`/`}>
                            <button className="btn BgPrimary mt-5">Go back</button>
                            </Link>
                        </div>
                    </> :
                    <>
                        <div className="grid grid-cols-4">
                            <div className="min-h-screen BgPrimary p-10">
                                {
                                    machedUser.isAdmin ?
                                        <>
                                            {/* ================ Admin options ================ */}
                                            <h1 className="text-3xl text-center font-bold mb-10">Admin</h1>
                                            <div className="mb-10" onClick={() => setTag('all-users')}>
                                                <Link className={`${tag === 'all-users' ? 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 mt-5 cursor-pointer unique' : 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 mt-5 cursor-pointer'}`} to='/dashboard/all-users'>All Users</Link>
                                            </div>
                                            <div className="mb-10" onClick={() => setTag('add-a-test')}>
                                                <Link className={`${tag === 'add-a-test' ? 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 mt-5 cursor-pointer unique' : 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 mt-5 cursor-pointer'}`} to='/dashboard/add-a-test'>Add a Test</Link>
                                            </div>
                                            <div className="mb-10" onClick={() => setTag('allTestas')}>
                                                <Link className={`${tag === 'allTestas' ? 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 mt-5 cursor-pointer unique' : 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 mt-5 cursor-pointer'}`} to='/dashboard/AllTeastas'>All Tests</Link>
                                            </div>
                                            <div className="mb-10" onClick={() => setTag('Reservation')}>
                                                <Link className={`${tag === 'Reservation' ? 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 mt-5 cursor-pointer unique' : 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 mt-5 cursor-pointer'}`} to='/dashboard/Reservation'>Reservations</Link>
                                            </div>
                                            <div className="mb-10" onClick={() => setTag('add-banner')}>
                                                <Link className={`${tag === 'add-banner' ? 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 mt-5 cursor-pointer unique' : 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 mt-5 cursor-pointer'}`} to='/dashboard/banner'>Add Banner</Link>
                                            </div>
                                            <div className="divider bg-white h-1"></div>
                                            {/* ================ user options ================ */}
                                            <h1 className="text-3xl text-center font-bold">User</h1>
                                            <div className="mb-10 mt-10" onClick={() => setTag('home')}>
                                                <Link className={`${tag === 'home' ? 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 mt-5 cursor-pointer unique' : 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 mt-5 cursor-pointer'}`} to='/'>Home</Link>
                                            </div>
                                            <div className="mb-10" onClick={() => setTag('profile')}>
                                                <Link className={`${tag === 'profile' ? 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 mt-5 cursor-pointer unique' : 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 mt-5 cursor-pointer'}`} to={`/dashboard/profile/${user.email}`}>Profile</Link>
                                            </div>
                                            <div className="mb-10" onClick={() => setTag('appointments')}>
                                                <Link className={`${tag === 'appointments' ? 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 cursor-pointer unique' : 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 cursor-pointer'}`} to={`/dashboard/appointments/${user.email}`}>Appointments</Link>
                                            </div>
                                            <div className="mb-10" onClick={() => setTag('results')}>
                                                <Link className={`${tag === 'results' ? 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 cursor-pointer unique' : 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 cursor-pointer'}`} to={`/dashboard/test-results/${user.email}`}>Test Results</Link>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <h1 className="text-3xl text-center font-bold">User</h1>
                                            <div className="mb-10" onClick={() => setTag('home')}>
                                                <Link className={`${tag === 'home' ? 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 mt-5 cursor-pointer unique' : 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 mt-5 cursor-pointer'}`} to='/'>Home</Link>
                                            </div>
                                            <div className="mb-10" onClick={() => setTag('profile')}>
                                                <Link className={`${tag === 'profile' ? 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 mt-5 cursor-pointer unique' : 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 mt-5 cursor-pointer'}`} to={`/dashboard/profile/${user.email}`}>Profile</Link>
                                            </div>
                                            <div className="mb-10" onClick={() => setTag('appointments')}>
                                                <Link className={`${tag === 'appointments' ? 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 cursor-pointer unique' : 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 cursor-pointer'}`} to={`/dashboard/appointments/${user.email}`}>Appointments</Link>
                                            </div>
                                            <div className="mb-10" onClick={() => setTag('results')}>
                                                <Link className={`${tag === 'results' ? 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 cursor-pointer unique' : 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 cursor-pointer'}`} to={`/dashboard/test-results/${user.email}`}>Test Results</Link>
                                            </div>
                                        </>
                                }
                            </div>
                            <div className="grid col-span-3">
                                {/* <h1 className="text-black font-bold text-5xl text-center mt-5 mb-0">User DashBoard</h1> */}
                                <Outlet></Outlet>
                            </div>
                        </div>
                    </>
            }
        </>
    );
};

export default DashBoard;