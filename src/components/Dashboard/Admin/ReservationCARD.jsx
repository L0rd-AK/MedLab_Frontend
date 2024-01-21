import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ReservationCARD = ({test}) => {
    // ======= update appointment status =========
    const updatedProfile={approved:true}
    const handelApprove=(id)=>{
        fetch(`http://localhost:5000/appointments/${id}`,{
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
                        title: 'Approved!!!',
                    })
                }
                console.log(data);
            })
    }
    // ======= delete apponitments =============
    const handelDelete=(_id)=>{
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
              fetch(`http://localhost:5000/appointments/${_id}`, {
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
                            <img src={test.imageUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </th>
            <td>
                <div>
                    <div className="font-bold text-left">{test.testName}</div>
                    <div className="text-sm opacity-50 text-left">MedLab Ltd.</div>
                </div>
            </td>
            <td>
                {test.email}
            </td>
            <td>{test?.currentDate}</td>
            <td>
                {
                    test?.approved?
                    <Link onClick={()=>handelApprove(test._id)}><button className="btn btn-ghost btn-md bg-success">Approved</button></Link>
                    :
                    <Link onClick={()=>handelApprove(test._id)}><button className="btn btn-ghost btn-md BgPrimary">pending</button></Link>

                }
                
            </td>
            <th>
                <Link onClick={()=>handelDelete(test._id)}><button className="btn btn-ghost btn-md BgPrimary">Cancle</button></Link>
            </th>
        </tr>
    </tbody>
    );
};

export default ReservationCARD;