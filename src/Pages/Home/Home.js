import React from 'react';
import Navbar from '../../Components/Navbar';
import About from './About';
import AboutAppointment from './AboutAppointment';
import ContactUs from './ContactUs';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Navbar />
            <About />
            <Info />
            <Services />
            <AboutAppointment />
            <Testimonials />
            <ContactUs />
        </div>
    );
};

export default Home;