import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const BannerCard = ({test}) => {
    // ======= update banner =============
    const updateStatus=()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, show this Banner!!!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Success!",
                text: "Banner set to homepage.",
                icon: "success"
              });
            }
          });
    }
    // ======= delete banner =============
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
              fetch(`https://backend-server-gamma.vercel.app/all-banners/${_id}`, {
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
                            <img src={test.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </th>
            <td>
                <div>
                    <div className="font-bold text-left">{test.title}</div>
                    <div className="text-sm opacity-50 text-left">MedLab Ltd.</div>
                </div>
            </td>
            <td>
                {test.couponCode}
            </td>
            <td>{test.couponRate}%</td>
            <td>
                {
                 test?.isActive?
                 <button className="btn btn-ghost btn-md bg-success">Active</button>:
                 <button onClick={()=>updateStatus()} className="btn btn-ghost btn-md BgPrimary">idle</button>
                }
            </td>
            <td>
                <Link to={`/dashboard/update-banner/${test._id}`}><button className="btn btn-ghost btn-md BgPrimary">Update</button></Link>
            </td>
            <th>
                <Link onClick={()=>handelDelete(test._id)}><button className="btn btn-ghost btn-md BgPrimary">Delete</button></Link>
            </th>
        </tr>
    </tbody>
    );
};

export default BannerCard;