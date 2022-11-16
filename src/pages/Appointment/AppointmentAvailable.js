import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentCard from './AppointmentCard';
import BookingModal from './BookingModal';

const AppointmentAvailable = ({ date }) => {
    const [appointments, setAppointments] = useState([]);
    const [booking, setBooking] = useState({});

    useEffect(() => {
        fetch('appointment-data.json')
            .then(res => res.json())
            .then(data => setAppointments(data));
    }, []);

    return (
        <section className='my-16 px-4 lg:px-12'>
            <h2 className='text-secondary text-xl text-center'>Available Appointments on {format(date, 'PP')}</h2>

            <div className='my-10 grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    appointments.map(appointment => <AppointmentCard
                        key={appointment._id}
                        appointment={appointment}
                        setBooking={setBooking} />)
                }
            </div>

            {booking && <BookingModal date={date} booking={booking} setBooking={setBooking} />}
        </section>
    );
};

export default AppointmentAvailable;