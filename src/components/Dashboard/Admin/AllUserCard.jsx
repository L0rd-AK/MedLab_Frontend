import { reload } from "firebase/auth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const AllUserCard = ({ user }) => {


    console.log('Demon of the 4th generation');
    const makeAdmin = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                // ============
                const updatedProfile={isAdmin: true}
                fetch(`https://backend-server-gamma.vercel.app/makeAdmin/${id}`, {
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
                                title: "Success!",
                                text: "User has been promoted to Admin.",
                                icon: "success"
                            });
                        }
                        // console.log(data);
                        location.reload();
                    })
                // ============
                
            }
        });
    }
    const blockUser = (id,status) => {
        if(status){
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Un-block this user"
            }).then((result) => {
                if (result.isConfirmed) {
                    // ============
                    const updatedProfile={status: false}
                    fetch(`https://backend-server-gamma.vercel.app/block/${id}`, {
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
                                    title: "Success!",
                                    text: "User has been Un-blocked.",
                                    icon: "success"
                                });
                            }
                            // console.log(data);
                            location.reload();
                        })
                    // ============
                    
                }
            });
        }else{
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, block this!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // ============
                    const updatedProfile={status: true}
                    fetch(`https://backend-server-gamma.vercel.app/block/${id}`, {
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
                                    title: "Success!",
                                    text: "User has been blocked.",
                                    icon: "success"
                                });
                            }
                            // console.log(data);
                            location.reload();
                        })
                    // ============
                    
                }
            });
        }
    }
    return (
        <tbody className="text-center">
            {/* row 1 */}
            <tr>
                <th className="flex justify-center">
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={user.image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    </div>
                </th>
                <td>
                    <div>
                        <div className="font-bold text-left">{user.Name ? user.Name : user.name}</div>
                        {/* <div className="text-sm opacity-50 text-left">MedLab Ltd.</div> */}
                    </div>
                </td>
                <td>
                    {user.email}
                </td>
                <td>
                    {
                        user.status?
                        <button onClick={()=>{blockUser(user._id,user.status)}} className="btn btn-ghost btn-sm bg-red-600">blocked</button>:
                        <button onClick={()=>{blockUser(user._id,user.status)}} className="btn btn-ghost btn-sm BgPrimary">active</button>
                        
                    }
                    
                </td>
                <td>
                    {
                        user.isAdmin ?
                            <button className="btn btn-ghost btn-sm bg-success">Admin</button> :
                            <button onClick={() => makeAdmin(user._id)} className="btn btn-ghost btn-sm BgPrimary">Make Admin</button>
                    }
                </td>
                <th>
                    <Link to={`/dashboard/all-users/modal/${user.email}`}>
                        <button className="btn btn-ghost btn-sm BgPrimary">see info</button>
                    </Link>
                </th>
            </tr>
        </tbody>
    );
};

export default AllUserCard;