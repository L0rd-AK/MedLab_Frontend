import { useContext } from 'react';
// import { FaBusinessTime, FaLocationDot, FaSackDollar } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom';
// import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';


const TestDetails = () => {
    const { user } = useContext(AuthContext);
    const test = useLoaderData();
    const {testName, imageUrl, details, price, date, slots } = test;
    const newTest={testName, imageUrl,email:user.email, details, price, date, slots };
    
    const handelBookedTests = () => {
        fetch(`http://localhost:5000/appointments`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTest),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully Booked',
                    })
                }
                console.log(data);
            })
    }

    return (
        <div className='mt-5 pb-16 bg-[#f1f5f8] '>
            <div className='bg-[#47ccc84e] rounded-md '>
                <div className=' flex gap-10 max-w-7xl mx-auto'>
                    <div className=' w-2/4 p-5 '>
                        <div className='text-black space-y-5 mt-7'>
                            <h1 className='text-3xl'><span className='font-bold'>Test:</span> {testName}</h1>
                            <h3 className='font-bold text-2xl'>Price: <span className='text-[#1CA774]'>${price}</span></h3>
                            <h3 className='font-bold '>Available Slots: <span className='text-red-600'>{slots}</span></h3>
                            <h3 className='font-bold '>Date: <span className='text-red-600'>{date}</span></h3>
                        </div>
                    </div>
                    <div className='w-2/4 p-3 ml-96'>
                        <img className='rounded-badge' src={imageUrl} alt="" />
                    </div>
                </div>
            </div>
            {/* ============================================================================ */}
            <div className='flex flex-col lg:flex-row gap-5 lg:max-w-7xl mx-auto mt-10'>
                <div className='lg:w-3/4 bg-white p-10 rounded-lg'>
                    <div>
                        <h1 className='text-black font-bold text-3xl'>Test Description:</h1>
                        {
                            details
                        }
                    </div>
                    <div>
                        <h1 className='text-black font-bold text-2xl mt-16 mb-5'>Test will be performed by:</h1>
                        <h1 className='text-black font-bold text-lg'>Dr. NAME:</h1>
                        Dr. James Graham <br />
                        MBBS
                        Appollo Hospitals, Newark, USA
                        <h1 className='text-black font-bold text-lg'>EXPERIENCE</h1>
                        20 Years +
                        <h1 className='text-black font-bold text-lg'>CONTACT:</h1>
                        +41 989 001 989
                        <h1 className='text-black font-bold text-lg'>ADDRESS:</h1>
                        City: California City State: IA Street: Loeprich 880 Zip: 11976-8749

                    </div>
                </div>
                <div className='lg:w-1/4 bg-white p-10 rounded-lg'>
                    <h1 className='text-black font-bold text-3xl mb-3'>Ready To Book?</h1>
                    <p className='text-sm mb-4'>Complete the eligibities checklist now and get started with your online application</p>
                    <div className='space-y-3'>
                        <input type="text" placeholder="Email..." className="input input-bordered input-accent w-full bg-transparent" />
                        <input type="number" placeholder="Phone Number.." className="input input-bordered input-accent w-full bg-transparent" />
                        <div className="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-black ">Get Report Alart</label>
                        </div>

                        <button onClick={handelBookedTests} className='btn BgPrimary text-white font-semibold w-full'>Book Test</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestDetails;