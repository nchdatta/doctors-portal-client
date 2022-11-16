import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../utilities/firebase.init';

const BookingModal = (props) => {
    const { date, booking, setBooking } = props;
    const { _id, treatment, slots } = booking;

    const [user] = useAuthState(auth);

    const handleBookAppointment = e => {
        e.preventDefault();
        const booking = {
            treatmentId: _id,
            treatment,
            date: e.target.date.value,
            slot: e.target.slot.value,
            patientName: e.target.name.value,
            patientPhone: e.target.phone.value,
            patientEmail: e.target.email.value,
        };

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        });

        setBooking(null);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatment}</h3>
                    <form className='flex flex-col gap-4 pt-10' onSubmit={handleBookAppointment}>
                        <input type="text" name='date' disabled defaultValue={format(date, 'PP')} placeholder="Type here" className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {slots?.map(slot => <option key={slots.indexOf(slot)}>{slot}</option>)}
                        </select>

                        <input type="text" name='name' defaultValue={user?.displayName} readOnly placeholder="Full Name *" className="input input-bordered w-full" required />
                        <input type="tel" name='phone' placeholder="Phone Number *" className="input input-bordered w-full" required />
                        <input type="text" name='email' defaultValue={user?.email} placeholder="Email" className="input input-bordered w-full" />
                        <input type="submit" className='btn btn-neutral' value="Book Now" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;