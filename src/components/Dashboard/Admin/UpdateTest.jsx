
import { useState } from "react";
import Swal from "sweetalert2";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from "react-router-dom";

const UpdateTest = () => {
    const enol=useLoaderData();
    const [startDate, setStartDate] = useState(new Date());
    
    // ======= update test =============
    const UpdateAtest = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const testName = form.get('name');
        const imageUrl = form.get('image');
        const price = form.get('price');
        const slots = form.get('slots');
        const date = form.get('postedDate');
        const User_Description = form.get('description');
        // const date=Postdate.current.value;
        const updatedProfile = { testName,imageUrl,price, details: User_Description,slots:parseInt(slots),date };

        fetch(`http://localhost:5000/all-tests/${enol._id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProfile),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount>0){
                    Swal.fire({
                        icon: 'success',
                        title: 'Test has been Updated',
                    })
                }
                console.log(data);
            })
    }
    return (
        <section className="bg-white ">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-10 text-2xl font-bold text-black ">Update a Test:</h2>
                <namem action="#">
                    <form onSubmit={UpdateAtest}>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="w-full">
                                <label name="name" className="block mb-2 text-sm font-medium text-black">Test Name:</label>
                                <input defaultValue={enol.testName} type="text" name="name" id="name" className="input input-bordered input-accent w-full bg-transparent" placeholder="Type test name" required="" />
                            </div>
                            <div className="w-full">
                                <label name="image" className="block mb-2 text-sm font-medium text-black">Image URL:</label>
                                <input defaultValue={enol.imageUrl} type="text" name="image" id="image" className="input input-bordered input-accent w-full bg-transparent" placeholder="Type test name" required="" />
                            </div>
                            <div className="w-full">
                                <label name="price" className="block mb-2 text-sm font-medium text-black">Price:</label>
                                <input defaultValue={enol.price} type="number" name="price" id="price" className="input input-bordered input-accent w-full bg-transparent" placeholder="Type test price" required="" />
                            </div>
                            <div className="w-full">
                                <label name="slots" className="block mb-2 text-sm font-medium text-black">Slots:</label>
                                <input defaultValue={enol.slots} type="text" name="slots" id="slots" className="input input-bordered input-accent w-full bg-transparent" placeholder="slots..." required="" />
                            </div>
                            <div className="w-full">
                                <label name="postedDate" className="block mb-2 text-sm font-medium text-black">Test posted on</label>
                                <DatePicker name="postedDate" className="input input-bordered input-accent w-full bg-transparent" selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>

                            <div className="sm:col-span-2">
                                <label name="description" className="block mb-2 text-sm font-medium text-black">Description</label>
                                <textarea defaultValue={enol.details} name='description' id="description" rows="8" className="input input-bordered input-accent w-full bg-transparent h-24" placeholder="Your description here"></textarea>
                            </div>
                        </div>
                        <button type="submit" className="BgPrimary inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                            Update Test
                        </button>
                    </form>
                </namem>
            </div>
        </section>
    );
};

export default UpdateTest;