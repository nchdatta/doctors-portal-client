import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../utilities/firebase.init';

const MyAppointments = () => {
    const [bookings, setBookings] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/booking?email=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setBookings(data.bookings))
            .catch(err => console.log(err.message))
    }, [user]);

    const handleCancel = id => {
        const confirm = window.confirm('Are you sure want to cancel booking?');
        if (confirm) {
            fetch(`http://localhost:5000/booking/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = bookings.filter(b => b._id !== data.deletedBooking._id);
                    setBookings(remaining);
                });
        }
    }

    return (
        <div>
            <h2 className='text-xl mb-3 text-primary'>My Appointments</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Sl.</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Slot</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, index) =>
                                <tr key={booking._id}>
                                    <th>{index + 1}</th>
                                    <td>{booking.treatment}</td>
                                    <td>{format(new Date(booking.date), 'PP')}</td>
                                    <td>{booking.slot}</td>
                                    <td>{<button
                                        onClick={() => handleCancel(booking._id)}
                                        title='Click to cancel the appointment.'>Cancel</button>}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;