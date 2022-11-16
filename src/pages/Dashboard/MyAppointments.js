import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../utilities/firebase.init';

const MyAppointments = () => {
    const [bookings, setBookings] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/booking?email=${user.email}`)
            .then(res => res.json())
            .then(data => setBookings(data.bookings));
    }, [user]);

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Sl.</th>
                        <th>Treatment</th>
                        <th>Date</th>
                        <th>Slot</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((booking, index) =>
                            <tr key={booking._id}>
                                <th>{index + 1}</th>
                                <td>{booking.treatment}</td>
                                <td>{(booking.date)}</td>
                                <td>{booking.slot}</td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyAppointments;