import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    CitySelect,
    CountrySelect,
    StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import Swal from "sweetalert2";
const Register = () => {
    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);
    const [Cityid, setCityid] = useState(0);
    const { createUser, upDateProfile, setToogle } = useContext(AuthContext);
    // const location = useLocation();
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const Name = form.get('name');
        const Photo = form.get('photo');
        const Blood = form.get('Blood');
        const country = countryid;
        const state = stateid;
        const city = Cityid;

        if (/^(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.*[a-z])(?=.*[0-9]).{6,}$/.test(password)) {
            // upDateProfile(Name,Photo);
            createUser(email, password)
                .then(result => {
                    upDateProfile(Name, Photo);
                    const newUser={email,password,Name,Blood,country,state,city}
                    fetch(`http://localhost:5000/users`, {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(newUser),
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Job Posted successfuly',
                                })
                            }
                            console.log(data);
                        })
                    setToogle(true);
                    toast.success(`successfully created account`);
                    navigate('/');
                    console.log(result.user)
                })
                .catch(error => {
                    toast.error(`${error.code}`);
                    console.error(error)
                })
        } else {
            toast.error('Password must contain Minimum Six characters, at least one Captal letter, one number and one special character');
        }

    }
    return (
        <section className="bg-white">
            <div className="flex items-center justify-center px-6 py-8">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="py-8 px-4">
                        <h1 className="mb-10 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create and account
                        </h1>
                        <namem className="space-y-4 md:space-y-6" action="#">
                            <form className="space-y-4 md:space-y-6" onSubmit={handleRegister}>
                                <div>
                                    <label name="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Your Name</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Amit Kumar" required />
                                </div>
                                <div>
                                    <label name="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label name="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Upload Proffile picture</label>
                                    <input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs"  />
                                </div>
                                <div className="text-white">
                                    <label name="Blood" className="block mb-2 text-sm font-medium text-white text-left">Blood Group</label>
                                    <select name="Blood" className="input input-bordered input-accent w-full bg-transparent">
                                        <option selected="">Select Blood type</option>
                                        <option className="text-black" value="A-">A-</option>
                                        <option className="text-black" value="A+">A+</option>
                                        <option className="text-black" value="B-">B-</option>
                                        <option className="text-black" value="B+">B+</option>
                                        <option className="text-black" value="AB+">AB+</option>
                                        <option className="text-black" value="AB-">AB-</option>
                                        <option className="text-black" value="O+">O+</option>
                                        <option className="text-black" value="O-">O-</option>
                                    </select>
                                </div>
                                {/* =============== react city-state ================= */}
                                <div>
                                    <h6 className="text-white text-left py-2">Country</h6>
                                    <CountrySelect
                                        onChange={(e) => {
                                            setCountryid(e.id);
                                        }}
                                        placeHolder="Select Country"
                                    />
                                    <h6 className="text-white text-left py-2">State</h6>
                                    <StateSelect
                                        countryid={countryid}
                                        onChange={(e) => {
                                            setstateid(e.id);
                                        }}
                                        placeHolder="Select State"
                                    />
                                    <h6 className="text-white text-left py-2">City</h6>
                                    <CitySelect
                                        countryid={countryid}
                                        stateid={stateid}
                                        Cityid={Cityid}
                                        onChange={(e) => {
                                            setCityid(e.id);
                                        }}
                                        placeHolder="Select City"
                                    />
                                </div>
                                {/* ================================ */}
                                <div className="flex gap-5">
                                    <div>
                                        <label name="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                                    <div>
                                        <label name="confirm password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Confirm password</label>
                                        <input type="password" name="confirm password" id="confirm password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label name="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <button type="submit" className="w-full text-white bg-[#47ccc8] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <Link to='/login'><a href="#" className="font-medium text-[#47ccc8] hover:underline dark:text-primary-500">Login here</a></Link>
                                </p>
                            </form>
                        </namem>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;