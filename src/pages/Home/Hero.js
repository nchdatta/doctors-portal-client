import React from 'react';
import stethos from '../../assets/images/stethos.jpg';
import PrimaryButton from '../Shared/PrimaryButton';

const Hero = () => {
    return (
        <section className='hero-section'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row ">
                    <div>
                        <h1 className="text-5xl font-bold text-neutral">Find Best Doctors & Book Appointment</h1>
                        <p className="py-8 text-neutral">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <PrimaryButton to='/appointment'>Get Started</PrimaryButton>
                    </div>
                    <img src={stethos} className="lg:w-1/2 rounded-lg shadow-lg" alt='Chair' />
                </div>
            </div>
        </section>
    );
};

export default Hero;