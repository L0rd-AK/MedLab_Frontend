import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const stripePromise = loadStripe('pk_test_51Ob7HPC3ZF5K53fVrpzEkRrrSPbUpUfIRBLeTqg41yQbVexZFBq3v6aWWRhAdULDAgU0l1dqlJ8dXBcZ0eXdkzfR00w6vohxx3');
const Payment = () => {
    const [bannerrCollection, setbannerrCollection] = useState([]);
    const [offer, setOffer] = useState(0);
    const test = useLoaderData();
    const { price } = test;
    // console.log(test);
    const [ballence, setBallence] = useState(price);


    const handelCoupon = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const searchValue = form.get('home-input');
        console.log(searchValue);
        console.log(offer);
        if (offer > 0) {
            const bt = price - (price * offer) / 100;
            setBallence(bt);
            toast.success(`successfully coupon applied`);
        }
        console.log(ballence);
    }
    useEffect(() => {
        fetch(`https://backend-server-gamma.vercel.app/all-banners`)
            .then(res => res.json())
            .then(data => {
                setbannerrCollection(data);
                // console.log(data);
                const bnr = bannerrCollection?.find(i => i.isActive === true)
                if (bnr?.couponRate === 20) setOffer(20);
            })
    }, [bannerrCollection])
    return (
        <div>
            <h1 className="text-4xl font-bold text-center text-success mt-5">--Payment--</h1>
            <h1 className="text-4xl font-bold text-center text-success mt-5">Fee: <span className="text-red-600">{ballence} BDT</span></h1>
            

            <form className="text-center" onSubmit={handelCoupon}>
                <input name="home-input" type="text" placeholder="apply coupon..." className="input input-bordered input-accent w-full max-w-xs bg-transparent" />
                <button className="btn BgPrimary px-5 py-2 border-none font-bold text-white hover:btn-outline mt-5 mb-5 ml-5">Apply</button>
            </form>
            <div className="flex justify-center items-center min-h-[500px]">
                <Elements stripe={stripePromise}>
                    <CheckOut test={test} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;