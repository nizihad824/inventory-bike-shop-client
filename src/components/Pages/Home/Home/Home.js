import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import Carousel from '../Carosal/Carosal';
import Bikes from './Bikes/Bikes/Bikes';
import Banner from '../Banner/Banner';
import ContactUs from './ContactUs/ContactUs';
import CubeLoader from '../../../CubeLoader/CubeLoader';
import { TabTitle } from '../../../../utilities/FunctionTitle';


const Home = () => {
    TabTitle('Home');
    return (
        <div>
            {/* <Carousel></Carousel> */}
            <Banner></Banner>
            <Bikes></Bikes>
            <CubeLoader></CubeLoader>
            
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;