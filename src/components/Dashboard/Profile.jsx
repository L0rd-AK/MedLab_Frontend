import { useEffect, useRef } from "react";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
const Profile = () => {
    const jobType = useRef();
    const userCollection = useLoaderData();
    // ======================================================================
    useEffect(() => {
        
    }, []);
    // ======================================================================

    const UpdateJob = (e) => {
        e.preventDefault();
        const selected_jobType = jobType.current.value;
        const form = new FormData(e.currentTarget);
        const Job_Title = form.get('title');
        const Company_Logo = form.get('photo');
        const Name = form.get('name');
        const Salary_Range = form.get('Salary');
        const Job_Applicants_Number = form.get('Job_Applicants_Number');
        const Job_Description = form.get('description');
        const updatedJob = { Job_Title, Job_Type: selected_jobType, Company_Logo, Name, Salary_Range, Job_Applicants_Number, Job_Posting_Date: startDate, Application_Deadline: endDate, Job_Description };
        fetch(`https://jobdoc.vercel.app/all-jobs/${userCollection._id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedJob),
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
                                <label name="title" className="block mb-2 text-sm font-medium text-black">Job Title</label>
                                <input defaultValue={userCollection.Job_Title} type="text" name="title" id="title" className="input input-bordered input-accent w-full bg-transparent" placeholder="Type product name" required="" />
                            </div>
                            <div>
                                <label name="type" className="block mb-2 text-sm font-medium text-black">Job Category</label>
                                <select ref={jobType} name="type" className="input input-bordered input-accent w-full bg-transparent">
                                    <option selected="">{userCollection.Job_Type}</option>
                                    <option value="On Site Job">On Site Job</option>
                                    <option value="Remote Job">Remote Job</option>
                                    <option value="Part Time Job">Part Time Job</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <label name="photo" className="block mb-2 text-sm font-medium text-black">Company Logo or Job banner URL</label>
                                <input defaultValue={userCollection.Company_Logo} type="text" name="photo" id="photo" className="input input-bordered input-accent w-full bg-transparent" placeholder="URL" required="" />
                            </div>
                            <div className="w-full">
                                <label name="name" className="block mb-2 text-sm font-medium text-black">User Name</label>
                                <input defaultValue={userCollection.Name} type="text" name="name" id="name" className="input input-bordered input-accent w-full bg-transparent" placeholder="User name" required="" />
                            </div>
                            <div className="w-full">
                                <label name="Salary" className="block mb-2 text-sm font-medium text-black">Salary</label>
                                <input defaultValue={userCollection.Salary_Range} type="number" name="Salary" id="Salary" className="input input-bordered input-accent w-full bg-transparent" placeholder="$2999" required="" />
                            </div>
                            <div className="w-full">
                                <label name="Job_Applicants_Number" className="block mb-2 text-sm font-medium text-black">Applicant number</label>
                                <input defaultValue={userCollection.Job_Applicants_Number} type="number" name="Job_Applicants_Number" id="Job_Applicants_Number" className="input input-bordered input-accent w-full bg-transparent" placeholder="0" required="" />
                            </div>
                            
                            <div className="sm:col-span-2">
                                <label name="description" className="block mb-2 text-sm font-medium text-black">Description</label>
                                <textarea defaultValue={userCollection.Job_Description} name='description' id="description" rows="8" className="input input-bordered input-accent w-full bg-transparent h-24" placeholder="Your description here"></textarea>
                            </div>
                        </div>
                        <button type="submit" className="BgPrimary inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                            Update
                        </button>
                    </form>
                </namem>
            </div>
        </section>
    );
};

export default Profile;