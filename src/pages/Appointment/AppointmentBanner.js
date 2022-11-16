import React from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../assets/images/chair.png';

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <section className='hero-section'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='lg:w-1/2 pl-4 lg:pl-16'><img src={chair} className="rounded-lg shadow-lg" alt='Chair' /></div>
                    <div className='rounded-lg shadow-lg'>
                        <DayPicker
                            mode='single'
                            selected={date}
                            onSelect={setDate} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;