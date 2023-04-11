import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CustomerReviews from '../Bikes/CustomerReviews/CustomerReviews';

const SingleBike = () => {
  const { bike } = useLoaderData();

  if (!bike) {
    return (
      <div className="hero min-h-screen  bg-sky-400">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-5xl font-bold ">Loading...</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="hero min-h-screen  bg-blue-100 ">
        <div className="hero-content flex-col lg:flex-row ">
          <img src={bike.img} className="max-w-sm rounded-lg shadow-2xl" alt={bike.name} />
          <div className="max-w-md rounded-lg shadow-2xl p-10 text-black" >
            <h1 className="text-5xl font-bold p-6">{bike.name}</h1>
            <p className="py-6">{bike.details}</p>
            <p className="py-6">Price: ${bike.price}</p>
          </div>
        </div>
      </div>
      <CustomerReviews></CustomerReviews>
    </div>
  );
};

export default SingleBike;
