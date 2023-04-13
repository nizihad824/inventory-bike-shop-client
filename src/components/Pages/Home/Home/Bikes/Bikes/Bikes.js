import React, { useState, useEffect } from 'react';
import BikeDetails from '../BikesDetails/BikeDetails';

import CubeLoader from '../../../../../CubeLoader/CubeLoader';
import { useNavigate } from 'react-router-dom';


const Bikes = () => {
  const [bikes, setBikes] = useState([]);
  const [displayedBikes, setDisplayedBikes] = useState([]);

  useEffect(() => {
    fetch('https://motorbike-inventory-server.vercel.app/bike')
      .then((response) => response.json())
      .then((data) => setBikes(data));
  }, []);


  useEffect(() => {
    setDisplayedBikes(bikes.slice(0, 6));
  }, [bikes]);



  // const loadAllBikes = () => {
  //     setDisplayedBikes(bikes);
  // };

  // const loadFirstThreeBikes = () => {
  //     setDisplayedBikes(bikes.slice(0, 3));
  // };
  const navigate = useNavigate();

  const handleSeeMoreClick = () => {
    navigate('/allbikes');
  };


  if (!bikes) {
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
    <div className='  p-6'
      style={{ backgroundColor: "#DEE5E5" }}
    >
      <div className='mt-6'>
        <h2 className="text-2xl font-bold text-center rounded-xl shadow-xl text-sky-700/50 mt-8 mb-4 py-6">Explore Our Collection of Premium Bikes</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 ">
        {displayedBikes.map((bike) => (
          <BikeDetails key={bike._id} bike={bike} />
        ))}
      </div>
      <div className="mx-auto text-center mt-6 mb-6">
        <button
          className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white hover:bg-sky-500 text-white font-bold py-2 w-full px-4 rounded"
          onClick={handleSeeMoreClick} // Add this onClick handler
        >
          See More
        </button>
      </div>


      {/* <div className="mx-auto w-full text-center mt-6 mb-6">
            {displayedBikes.length < bikes.length ? (
                <button
                    onClick={loadAllBikes}
                    className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700"
                >
                    See More
                </button>
            ) : (
                <button
                    onClick={loadFirstThreeBikes}
                    className="bg-red-500 text-white px-4 py-2 mt-4 rounded hover:bg-red-700"
                >
                    See Less
                </button>
            )}
            </div> */}
    </div>
  );
};

export default Bikes;
