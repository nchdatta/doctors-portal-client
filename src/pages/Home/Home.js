import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
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
            <Navbar />
            <Hero />
            <Info />
            <Services />
            <Banner />
            <AppointmentSection />
            <Testimonials />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;