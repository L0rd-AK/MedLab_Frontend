import { Link, useLoaderData } from "react-router-dom";

const Modal = () => {
   const x=useLoaderData();
    return (
        <div className="flex flex-col justify-center items-center">
                <div className="modal-box text-left">
                    <h3 className="font-bold text-3xl text-left text-accent">User Info</h3>
                    <p className="py-2"><span className="font-bold text-xl text-left">Name:  </span> {x.Name?x.Name:x.name}</p>
                    <p className="py-2"><span className="font-bold text-xl text-left">Email:  </span> {x?.email}</p>
                    <p className="py-2"><span className="font-bold text-xl text-left">Blood Group:  </span>  {x?.Blood}</p>
                    <p className="py-2"><span className="font-bold text-xl text-left">Status:  </span> {x?.status}</p>
                    <p className="py-2"><span className="font-bold text-xl text-left">Role:  </span> {x?.isAdmin ? "Admin" : "Normal User"}</p>
                    <p className="py-2"><span className="font-bold text-xl text-left">Country:  </span> {x?.Country}</p>
                    <p className="py-2"><span className="font-bold text-xl text-left">State:  </span> {x?.State}</p>
                    <div className="">
                        <form method="">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to={`/dashboard/all-users`}>
                            <button className="btn BgPrimary mt-5">Go back</button>
                            </Link>
                        </form>
                    </div>
                </div>
            
        </div>
    );
};

export default Modal;