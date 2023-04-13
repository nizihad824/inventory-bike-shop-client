import React, { useState, useEffect } from 'react';
import BikeDetails from '../BikesDetails/BikeDetails';
// import { useLoaderData } from 'react-router-dom';


const AllBikes = () => {
  const [bikes, setBikes] = useState([]);


  useEffect(() => {
    fetch('https://motorbike-inventory-server.vercel.app/bike')
      .then((response) => response.json())
      .then((data) => setBikes(data));
  }, []);

  return (
    <div >
      <div className="bg-pattern py-8">
        <h2 className="text-2xl font-bold text-center mt-8 mb-4">
          All Our Premium Bikes
        </h2></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 container mx-auto">
        {bikes.map((bike) => (
          <BikeDetails
            key={bike._id} bike={bike}
          />
        ))}
      </div>
    </div>
  );
};

export default AllBikes;
