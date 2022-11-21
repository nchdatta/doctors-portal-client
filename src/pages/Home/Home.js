import React from 'react';
import PageTitle from '../Shared/PageTitle';
import AppointmentSection from './AppointmentSection';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Hero from './Hero';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <PageTitle title='Find Best Doctors & Book Appointment' />
            <Hero />
            <Info />
            <Services />
            <Banner />
            <AppointmentSection />
            <Testimonials />
            <ContactUs />
        </div>
    );
};

export default Home;