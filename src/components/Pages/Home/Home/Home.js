import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import Carousel from '../Carosal/Carosal';
import Bikes from './Bikes/Bikes/Bikes';


const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Bikes></Bikes>
        </div>
    );
};

export default Home;