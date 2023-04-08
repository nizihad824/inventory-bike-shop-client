import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={bike.img} className="max-w-sm rounded-lg shadow-2xl" alt={bike.name} />
        <div>
          <h1 className="text-5xl font-bold">{bike.name}</h1>
          <p className="py-6">{bike.details}</p>
          <p className="py-6">Price: ${bike.price}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBike;
