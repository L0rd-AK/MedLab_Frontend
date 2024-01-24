import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AppointmentCard = ({test}) => {
    const {_id,testName,imageUrl,price,date,slots}=test;
    const cancleAppointment=(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://backend-server-gamma.vercel.app/appointments/${id}`, {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json'
                },
              })
              .then(res=>res.json())
              .then(data=>{
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Test has been deleted.',
                        'success'
                      )
                    location.reload();
                }
              })
            }
          })
    }
    return (
        <tbody className="text-center">
            {/* row 1 */}
            <tr>
                <th className="flex justify-center">
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={imageUrl} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    </div>
                </th>
                <td>
                    <div>
                        <div className="font-bold text-left">{testName}</div>
                        <div className="text-sm opacity-50 text-left">MedLab Ltd.</div>
                    </div>
                </td>
                <td>
                    {test?.currentDate}
                </td>
                <td>
                    {date}
                </td>
                <td>{slots}</td>
                <th>
                    <Link onClick={()=>cancleAppointment(_id)}><button className="btn btn-ghost btn-lg BgPrimary">cancle</button></Link>
                </th>
            </tr>
        </tbody>
    );
};

export default AppointmentCard;