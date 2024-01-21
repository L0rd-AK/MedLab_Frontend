import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe('pk_test_51Ob7HPC3ZF5K53fVrpzEkRrrSPbUpUfIRBLeTqg41yQbVexZFBq3v6aWWRhAdULDAgU0l1dqlJ8dXBcZ0eXdkzfR00w6vohxx3');
const Payment = () => {
    const id=useParams();
    return (
        <div>
            <h1 className="text-4xl font-bold text-center text-success mt-5">--Payment--</h1>
            <div className="flex justify-center items-center min-h-screen">
                <Elements stripe={stripePromise}>
                    <CheckOut price={id} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;