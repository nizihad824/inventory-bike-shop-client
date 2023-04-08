import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import Carousel from '../Carosal/Carosal';
import Bikes from './Bikes/Bikes/Bikes';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>
            {/* <Carousel></Carousel> */}
            <Banner></Banner>
            <Bikes></Bikes>
        </div>
    );
};

export default Home;