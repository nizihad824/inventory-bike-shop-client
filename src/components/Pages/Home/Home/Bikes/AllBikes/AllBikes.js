import React, { useState, useEffect, useContext } from 'react';
import BikeDetails from '../BikesDetails/BikeDetails';
import CubeLoader from '../../../../../CubeLoader/CubeLoader';
import { AuthContext } from '../../../../../../authentication/AuthProvider';
// import { useLoaderData } from 'react-router-dom';


const AllBikes = () => {
  const [bikes, setBikes] = useState([]);
  const { loading } = useContext(AuthContext);


  useEffect(() => {
    fetch('https://motorbike-inventory-server.vercel.app/bike')
      .then((response) => response.json())
      .then((data) => setBikes(data));
  }, []);

  if (bikes.length<1) {
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
