import { format } from 'date-fns';
import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import baseUrl from '../../utilities/baseUrl';
import Loading from '../Shared/Loading';
import PageTitle from '../Shared/PageTitle';

const AllAppointments = () => {
    // Getting bookings data 
    const { data: bookings, isLoading, refetch } = useQuery('bookings', () => fetch(baseUrl + `/booking/all`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) { return <Loading /> }


    const handleCancel = id => {
        const confirm = window.confirm('Are you sure want to cancel booking?');
        if (confirm) {
            fetch(baseUrl + `/booking/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        refetch();
                        toast.success(`Cancelled booking for ${data.deletedBooking.patientName}`)
                    }
                });
        }
    }

    return (
        <div>
            <PageTitle title='All Appointments' />
            <h2 className='text-xl mb-3 text-primary'>All Appointments <span className='text-sm text-neutral'>[Total: {bookings.length}]</span></h2>
            <div className="overflow-x-auto">
                <table className="table w-full text-sm">
                    <thead>
                        <tr>
                            <th>Sl.</th>
                            <th>Patient</th>
                            <th>Treatment</th>
                            <th>Doctor</th>
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
                                    <td>{booking.patientName}</td>
                                    <td>{booking.treatment}</td>
                                    <td>{booking.doctor}</td>
                                    <td>{format(new Date(booking.date), 'PP')}</td>
                                    <td>{booking.slot}</td>
                                    <td>{<button className='btn btn-sm btn-primary'
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

export default AllAppointments;