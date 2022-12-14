import React, { Suspense } from 'react';
import Loading from '../Shared/Loading';
import PageTitle from '../Shared/PageTitle';
import AppointmentSection from './AppointmentSection';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Hero from './Hero';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';
const DoctorsHome = React.lazy(() => import('./DoctorsHome'));

const Home = () => {
    return (
        <div>
            <PageTitle title='Find Best Doctors & Book Appointment' />
            <Hero />
            <Info />
            <Services />
            <Banner />
            <AppointmentSection />
            <Suspense fallback={<Loading />}><DoctorsHome /></Suspense>
            <Testimonials />
            <ContactUs />
        </div>
    );
};

export default Home;