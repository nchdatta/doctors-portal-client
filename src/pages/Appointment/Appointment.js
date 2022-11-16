import React, { useState } from 'react';
import AppointmentAvailable from './AppointmentAvailable';
import AppointmentBanner from './AppointmentBanner';
import 'react-day-picker/dist/style.css';

const Appointment = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <AppointmentBanner setDate={setDate} />
            <AppointmentAvailable date={date} />
        </div>
    );
};

export default Appointment;