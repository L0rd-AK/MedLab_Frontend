import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
const Profile = () => {
    const [countryData, setcountryData] = useState([]);
    const BloodType = useRef();
    const countryType = useRef();
    const stateType = useRef();
    const userCollection = useLoaderData();
    console.log(userCollection);
    // ======================================================================
    useEffect(()=>{
        fetch('/countryData.json')
        .then(res=>res.json())
        .then(data=>setcountryData(data))
    },[])
    // ======================================================================
   
    // =========== country ======================
    const [countryid, setCountryid] = useState('');
    const [state, setState] = useState([]);
    const [stateid, setStateid] = useState('');
    
    
    const handlecounty = (e) => {
        const getcountryId = e.target.value;
        const getStatedata = countryData.find(country => country.country_id === getcountryId).states;
        setState(getStatedata);
        setCountryid(getcountryId);
    }

    const handlestate = (e) => {
        const stateid = e.target.value;
        setStateid(stateid);

    }
    const UpdateJob = (e) => {
        e.preventDefault();
        const selected_BloodType = BloodType.current.value;
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const User_Description = form.get('description');
        const Country1 = countryType.current.value;
        const State1 = stateType.current.value;

        const Country = countryData[parseInt(Country1)-1].country_name;
        let State='';
        state.map(i=>{
            if(i.state_id===State1)State=i.state_name;
        })
        const updatedProfile = { name,selected_BloodType,Country,State,User_Description: User_Description };

        fetch(`http://localhost:5000/users/${userCollection._id}`,{
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProfile),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Job has been Updated',
                    })
                }
                console.log(data);
            })
    }

    return (
        <section className="bg-white ">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-10 text-2xl font-bold text-black ">Update Profile Information</h2>
                <namem action="#">
                    <form onSubmit={UpdateJob}>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="w-full">
                                <label name="name" className="block mb-2 text-sm font-medium text-black">Name</label>
                                <input defaultValue={userCollection.name} type="text" name="name" id="name" className="input input-bordered input-accent w-full bg-transparent" placeholder="Type your name" required="" />
                            </div>
                            <div className="text-black">
                                    <label name="Blood" className="block mb-2 text-sm font-medium text-black text-left">Blood Group</label>
                                    <select ref={BloodType} name="Blood" className="input input-bordered input-accent w-full bg-transparent">
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
                            <div className="w-full">
                                <label name="email" className="block mb-2 text-sm font-medium text-black">User email</label>
                                <input defaultValue={userCollection.Name} type="text" name="email" id="email" className="input input-bordered input-accent w-full bg-transparent" placeholder="User email" required="" />
                            </div>
                            <div className="w-full">
                                <label name="password" className="block mb-2 text-sm font-medium text-black">Update Password</label>
                                <input defaultValue={userCollection.password} type="password" name="password" id="password" className="input input-bordered input-accent w-full bg-transparent" placeholder="••••••••" required="" />
                            </div>
                            <div className="text-Black">
                                    <label name="country" className="block mb-2 text-sm font-medium text-white text-left">Country</label>
                                    <select ref={countryType} name='country' className="input input-bordered input-accent w-full bg-transparent" onChange={(e) => handlecounty(e)}>
                                        <option className="text-black" value="">Select Country</option>
                                        {
                                            countryData.map((getcountry, index) => (
                                                <option className="text-black" value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                            ))

                                        }
                                    </select>
                                </div>
                            <div className="text-black">
                                    <label name="states" className="block mb-2 text-sm font-medium text-white text-left">State</label>
                                    <select ref={stateType} name='states' className="input input-bordered input-accent w-full bg-transparent" onChange={(e) => handlestate(e)}>
                                        <option className="text-black" value="">Select State</option>
                                        {
                                            state.map((getstate, index) => (
                                                <option className="text-black" value={getstate.state_id} key={index}>{getstate.state_name}</option>
                                            ))
                                        }
                                    </select>
                            </div>
                            
                            <div className="sm:col-span-2">
                                <label name="description" className="block mb-2 text-sm font-medium text-black">Description</label>
                                <textarea defaultValue={userCollection.Job_Description} name='description' id="description" rows="8" className="input input-bordered input-accent w-full bg-transparent h-24" placeholder="Your description here"></textarea>
                            </div>
                        </div>
                        <button type="submit" className="BgPrimary inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                            Update Profile
                        </button>
                    </form>
                </namem>
            </div>
        </section>
    );
};

export default Profile;