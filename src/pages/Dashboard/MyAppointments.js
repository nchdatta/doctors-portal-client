import React, { useEffect, useState } from 'react';

const MyAppointments = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setBookings(data.bookings));
    }, []);

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
                            <tr>
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