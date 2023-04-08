import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../../../Carosal/Carosal';
import CustomerReviews from '../Bikes/CustomerReviews/CustomerReviews';

const SingleBike = () => {
  const { id } = useParams();
  const [bike, setBike] = useState(null);

  useEffect(() => {
    fetch('/bikes.json')
      .then((response) => response.json())
      .then((data) => {
        const foundBike = data.items.find((item) => item.id === parseInt(id));
        setBike(foundBike);
      });
  }, [id]);

  if (!bike) {
    return <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold">Loading...</h1>
        </div>
      </div>
    </div>;
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
