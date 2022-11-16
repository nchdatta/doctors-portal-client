import React from 'react';

const AppointmentCard = ({ appointment, setBooking }) => {
    const { name, slots } = appointment;
    return (
        <div className="card shadow-lg">
            <div className="card-body text-neutral text-center">
                <h2 className="card-title mx-auto">{name}</h2>
                <p>{slots.length ? slots[0] : <span className='text-error'>No slots available</span>}</p>
                <p>{slots.length} Spaces Available</p>
                <div className='w-1/2 mx-auto mt-4'>
                    <label htmlFor="booking-modal"
                        onClick={() => setBooking(appointment)}
                        disabled={slots.length === 0}
                        className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">
                        Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;