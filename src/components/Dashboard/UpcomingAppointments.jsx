import { useLoaderData } from "react-router-dom";
import AppointmentCard from "./AppointmentCard";

const UpcomingAppointments = () => {
    const appointments=useLoaderData();
    console.log(appointments);
    return (
        <div className="overflow-x-auto mt-10">
            <h1 className="text-left text-3xl font-bold text-black mb-5 ml-5">Upcomming Appointments:</h1>
            <table className="table">
                {/* head */}
                <thead className="BgPrimary text-black text-bold text-center text-base">
                    <tr>
                        <th>image</th>
                        <th>Test name</th>
                        <th>Booked on</th>
                        <th>Date</th>
                        <th>Slot</th>
                        <th>cancle appointment</th>
                    </tr>
                </thead>
                {
                    appointments?.map(i=> <AppointmentCard key={i._id} test={i}></AppointmentCard>)
                }
            </table>
        </div>
    );
};

export default UpcomingAppointments;