import { format } from 'date-fns';
import React, { Suspense, useState } from 'react';
import { useQuery } from 'react-query';
import baseUrl from '../../utilities/baseUrl';
import Loading from '../Shared/Loading';
import AppointmentCard from './AppointmentCard';
import BookingModal from './BookingModal';

const AppointmentAvailable = ({ date }) => {
    const [booking, setBooking] = useState({});
    const { data: services } = useQuery('services', () => fetch(baseUrl + '/service').then(res => res.json()));

    // console.log(booking)

    return (
        <section className='mt-10 mb-16 px-4 lg:px-8'>
            <h2 className='text-primary text-xl text-center'>Available Appointments on <span className='font-bold text-blue-500'>{format(date, 'PP')}</span></h2>

            <div className='my-10 grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(service =>
                        <Suspense key={service._id} fallback={<Loading />}>
                            <AppointmentCard
                                date={date}
                                service={service}
                                setBooking={setBooking} />
                        </Suspense>)
                }
            </div>

            {booking && <BookingModal date={date} booking={booking} setBooking={setBooking} />}
        </section>
    );
};

export default AppointmentAvailable;