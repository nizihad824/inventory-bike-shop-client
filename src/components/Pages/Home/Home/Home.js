import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import Carousel from '../Carosal/Carosal';
import Bikes from './Bikes/Bikes/Bikes';
import Banner from '../Banner/Banner';
import ContactUs from './ContactUs/ContactUs';


const Home = () => {
    return (
        <div>
            {/* <Carousel></Carousel> */}
            <Banner></Banner>
            <Bikes></Bikes>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;