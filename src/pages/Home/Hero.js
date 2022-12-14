import React from 'react';
import doctorAppointment from '../../assets/images/doctor-appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Hero = () => {
    return (
        <section className='hero-section'>
            <div className="hero pt-16 lg:pt-20 pb-28">
                <div className="hero-content flex-col lg:flex-row ">
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-neutral">Find Best Doctors to Book Appointment</h1>
                        <p className="py-6 text-neutral">We offer an online based doctors appointment service with the facility of an electronic personal health record system, the first of its kind in our country.</p>
                        <PrimaryButton to='/appointment'>Get Started</PrimaryButton>
                    </div>
                    <img src={doctorAppointment} className="lg:w-3/5" alt='Doctor App' />
                </div>
            </div>
        </section>
    );
};

export default Hero;