import React, { useState, useEffect } from 'react';
import BikeDetails from '../BikesDetails/BikeDetails';


const AllBikes = () => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetch('/bikes.json')
      .then((response) => response.json())
      .then((data) => setBikes(data.items));
  }, []);

  return (
    <div >
      <div className="bg-sky-200 py-8">
        <h2 className="text-2xl font-bold text-center mt-8 mb-4">
        All Our Premium Bikes
      </h2></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 container mx-auto">
        {bikes.map((bike) => (
          <BikeDetails key={bike.id} bike={bike} />
        ))}
      </div>
    </div>
  );
};

export default AllBikes;