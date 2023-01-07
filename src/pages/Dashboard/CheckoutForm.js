import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../utilities/baseUrl';

const CheckoutForm = ({ booking }) => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const { treatment, patientName, patientEmail } = booking;

    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        if (message) {
            setTimeout(() => {
                setMessage('');
            }, 3000);
        }
    }, [message]);

    useEffect(() => {
        if (!stripe) {
            return;
        }
        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case "succeeded":
                    setMessage("Payment succeeded!");
                    break;
                case "processing":
                    setMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    setMessage("Your payment was not successful, please try again.");
                    break;
                default:
                    setMessage("Something went wrong.");
                    break;
            }
        });
    }, [stripe]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsLoading(true);
        const { error } = await stripe.confirmPayment({
            elements,
            redirect: 'if_required',
            confirmParams: {
                return_url: '',
                payment_method_data: {
                    billing_details: {
                        name: patientName,
                        email: patientEmail
                    }
                },
            },
        });


        if (error) {
            setMessage(error.message);
            setIsLoading(false);
            return;
        }

        await fetch(baseUrl + `/booking/${booking._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        });
        setIsLoading(false);
        navigate('/payment', { replace: true });

    };



    return (
        <div className='w-full mt-10 shadow-md border rounded-lg p-10 min-h-[450px]'>
            <div class="flex flex-col lg:flex-row justify-between gap-10 lg:gap-4">
                <div>
                    <h2 className='text-2xl font-bold border-b-2 mb-4'>Payment For</h2>
                    <p className='text-md mb-2 text-gray-500'><b>Treatment:</b> {treatment}</p>
                    <p className='text-md mb-2 text-gray-500'><b>Patient:</b> {patientName}</p>
                    <p className='text-md mb-2 text-gray-500'><b>Email:</b> {patientEmail}</p>
                    <h2 className='text-md font-bold mt-4'>Payment Amount: <span className=' text-green-600'>$25</span></h2>
                </div>
                <div className='lg:w-1/2 border-0 pl-0 lg:border-l lg:pl-10'>
                    <form onSubmit={handleSubmit}>
                        <PaymentElement />
                        <input type="submit" value="Pay" disabled={isLoading || !stripe} className='w-full mx-auto mt-10 btn btn-primary px-8 border-0 bg-gradient-to-r from-primary to-secondary text-white' />
                    </form>
                    {message && <p className='text-red-600 text-center mt-4'>{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default CheckoutForm;