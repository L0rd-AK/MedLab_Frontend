import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AddBanner = () => {
    const banr=useLoaderData();
    const UpdateAtest = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const testName = form.get('name');
        const imageUrl = form.get('image');
        const code = form.get('code');
        const rate = form.get('rate');
        const description = form.get('description');
        // const date=Postdate.current.value;
        const updatedProfile = { title:testName,image:imageUrl,couponCode:code,couponRate:rate,description };

        fetch(`https://backend-server-gamma.vercel.app/all-banners`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProfile),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId){
                    Swal.fire({
                        icon: 'success',
                        title: 'Banner has been Posted',
                    })
                }
                // console.log(data);
            })
    }
    return (
        <section className="bg-white ">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 className="mb-10 text-2xl font-bold text-black ">Create a Test:</h2>
            <namem action="#">
                <form onSubmit={UpdateAtest}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="w-full">
                            <label name="name" className="block mb-2 text-sm font-medium text-black">Test Name:</label>
                            <input defaultValue={banr?.title} type="text" name="name" id="name" className="input input-bordered input-accent w-full bg-transparent" placeholder="Type test name" required="" />
                        </div>
                        <div className="w-full">
                            <label name="image" className="block mb-2 text-sm font-medium text-black">Image URL:</label>
                            <input defaultValue={banr?.image} type="text" name="image" id="image" className="input input-bordered input-accent w-full bg-transparent" placeholder="Type test name" required="" />
                        </div>
                        <div className="w-full">
                            <label name="code" className="block mb-2 text-sm font-medium text-black">Coupon Code:</label>
                            <input defaultValue={banr?.couponCode} type="test" name="code" id="code" className="input input-bordered input-accent w-full bg-transparent" placeholder="Type test price" required="" />
                        </div>
                        <div className="w-full">
                            <label name="rate" className="block mb-2 text-sm font-medium text-black">Coupon Rate:</label>
                            <input defaultValue={banr?.couponRate} type="number" name="rate" id="rate" className="input input-bordered input-accent w-full bg-transparent" placeholder="slots..." required="" />
                        </div>
                        
                        <div className="sm:col-span-2">
                            <label name="description" className="block mb-2 text-sm font-medium text-black">Description</label>
                            <textarea defaultValue={banr?.description} name='description' id="description" rows="8" className="input input-bordered input-accent w-full bg-transparent h-24" placeholder="Your description here"></textarea>
                        </div>
                    </div>
                    <button type="submit" className="BgPrimary inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                        Post
                    </button>
                </form>
            </namem>
        </div>
    </section>
    );
};

export default AddBanner;