import { getDate } from 'date-fns';
import React from 'react';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ date, setDate }) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDate = new Date().getDate();
    const defaultMonth = new Date(currentYear, currentMonth);
    const futureDate = new Date(new Date().setDate(new Date().getDate() + 30));

    return (
        <section className='hero-section-app py-20'>
            <div className="hero">
                <div className="hero-content">
                    <div className='rounded-lg shadow-xl border-2 border-primary bg-white'>
                        <DayPicker
                            mode='single'
                            onDayClick={(e) => {
                                getDate(e) <= currentDate && alert("Pick another date.")
                            }}
                            selected={date}
                            onSelect={setDate}
                            defaultMonth={defaultMonth} fromMonth={defaultMonth} fromDate={currentDate}
                            toMonth={new Date(futureDate.getFullYear(), futureDate.getMonth())}
                            showOutsideDays
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;