import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import baseUrl from '../../utilities/baseUrl';
import Loading from '../Shared/Loading';
import AppointmentCard from './AppointmentCard';
import BookingModal from './BookingModal';

const AppointmentAvailable = ({ date }) => {
    const [booking, setBooking] = useState({});

    const { data: services, isLoading } = useQuery('services', () => fetch(baseUrl + '/service').then(res => res.json()));
    if (isLoading) { return <Loading /> }

    return (
        <section className='my-16 px-4 lg:px-12'>
            <h2 className='text-secondary text-xl text-center'>Available Appointments on {format(date, 'PP')}</h2>

            <div className='my-10 grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <AppointmentCard
                        key={service._id}
                        service={service}
                        setBooking={setBooking} />)
                }
            </div>

            {booking && <BookingModal date={date} booking={booking} setBooking={setBooking} />}
        </section>
    );
};

export default AppointmentAvailable;