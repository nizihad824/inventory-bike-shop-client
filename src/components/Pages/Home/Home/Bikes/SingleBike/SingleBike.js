import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CustomerReviews from '../Bikes/CustomerReviews/CustomerReviews';
import CubeLoader from '../../../../../CubeLoader/CubeLoader';

const SingleBike = () => {
  const { bike } = useLoaderData();

  if (!bike) {
    return (
      <div className="hero flex justify-center ms-64 my-64  bg-sky-100 max-w-[1000px] ">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <CubeLoader />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div >
    {/* <CubeLoader style={{ position: 'absolute', zIndex: 1, width: '100px', height: '100%' }} /> */}
    <div className="main-content" style={{ position: 'relative', zIndex: 2 }}>
      <div className="hero min-h-screen bg-blue-100 ">
        <div className="hero-content flex-col lg:flex-row ">
          <img src={bike.img} className="max-w-sm rounded-lg shadow-2xl" alt={bike.name} />
          <div className="max-w-md rounded-lg shadow-2xl p-10 text-black">
            <h1 className="text-5xl font-bold p-6">{bike.name}</h1>
            <p className="py-6">{bike.details}</p>
            <p className="py-6">Price: ${bike.price}</p>
          </div>
        </div>
      </div>
      <CustomerReviews></CustomerReviews>
    </div>
  </div>
  
  );
};

export default SingleBike;
