import { format } from 'date-fns';
import React from 'react';

const BookingModal = (props) => {
    const { date, booking, setBooking } = props;
    const { name, slots } = booking;

    const handleBookAppointment = e => {
        e.preventDefault();
        setBooking({});
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='flex flex-col gap-4 pt-10' onSubmit={handleBookAppointment}>
                        <input type="text" name='date' disabled defaultValue={format(date, 'PP')} placeholder="Type here" className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {slots?.map(slot => <option key={slots.indexOf(slot)}>{slot}</option>)}
                        </select>

                        <input type="text" name='name' placeholder="Full Name *" className="input input-bordered w-full" required />
                        <input type="text" name='phone' placeholder="Phone Number *" className="input input-bordered w-full" required />
                        <input type="text" name='email' placeholder="Email" className="input input-bordered w-full" />
                        <input type="submit" className='btn btn-neutral' value="Book Now" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;