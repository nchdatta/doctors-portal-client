import React, { useEffect, useState } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import baseUrl from '../../utilities/baseUrl';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import CheckoutForm from './CheckoutForm';
import PageTitle from '../Shared/PageTitle';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK_KEY);

const Checkout = () => {
    const { id } = useParams();
    const { data: booking } = useQuery('sinle-booking', () => fetch(baseUrl + `/booking/booking/${id}`, {
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        fetch(baseUrl + "/stripe/stripe-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price: 25 }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const appearance = {
        theme: 'flat',
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div className='w-full lg:w-3/4 mx-auto min-h-screen px-4'>
            <PageTitle title="Checkout" />
            {
                clientSecret && <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm booking={booking} />
                </Elements>
            }
        </div>
    );
};

export default Checkout;