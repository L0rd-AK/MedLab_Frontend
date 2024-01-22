import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = ({ test }) => {
    const { user } = useContext(AuthContext);
    const [clientSecret, setClientSecret] = useState("");
    const [TransectionID, setTransectionID] = useState("");
    const [err, setErr] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    //================ show modal on payment succees ==========
    const { testName, imageUrl, details, price, date, slots } = test;
    const bookedDate = new Date();
    let day = bookedDate.getDate();
    let month = bookedDate.getMonth() + 1;
    let year = bookedDate.getFullYear();

    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${day}-${month}-${year}`;
    const newTest = { testName, imageUrl, email: user.email, details, price, date, slots: slots-1,currentDate };

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
    //==========================
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price: parseInt(price) }),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret)
                console.log(data);
            });
    }, [price]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;
        const card = elements.getElement(CardElement);
        if (card == null) return;

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('[error]', error);
            setErr(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setErr('')
        }
        // confirm payemnt
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: user?.displayName||'Unknown',
                  email:user?.email||'Unknown'
                },
              },
            },
          );
          if(confirmError){
            console.log('error',confirmError);
            setErr(error?.message);
          }else{
            console.log('paymentIntent',paymentIntent);
            setErr('');
            if(paymentIntent.status==='succeeded'){
                handelBookedTests();
                setTransectionID(paymentIntent.id);
            }
          }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: 'black',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
           
            {
                clientSecret?
                <>
                <button className="text-white BgPrimary font-bold py-2 px-44 rounded-lg mt-5" type="submit" disabled={!stripe}>
                    Pay
                </button>
                <p className="text-red-600">{err}</p>
                {TransectionID? <p className="text-green-600">Payment Success: {TransectionID}</p>:<p></p>}
                </>
                :
                <button className="text-white BgPrimary font-bold py-2 px-44 rounded-lg mt-5 disabled" type="submit" disabled={!stripe}>
                Pay
            </button>
            }
        </form>
    );
};

export default CheckOut;