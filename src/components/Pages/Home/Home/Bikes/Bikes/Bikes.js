import React, { useState, useEffect } from 'react';
import BikeDetails from '../BikesDetails/BikeDetails';
import { useHistory, useNavigate } from 'react-router-dom';


const Bikes = () => {
    const [bikes, setBikes] = useState([]);
    const [displayedBikes, setDisplayedBikes] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5000/bike')
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
        return <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <div>
              <h1 className="text-5xl font-bold">Loading...</h1>
            </div>
          </div>
        </div>;
      }

    return (
        <div    className=' bg-blue-100 p-6'>
            <div className='mt-6 bg-sky-100'>
                <h2 className="text-2xl font-bold text-center rounded-2xl shadow-2xl text-blue-500 mt-8 mb-4 py-6">Explore Our Collection of Premium Bikes</h2>
                </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 ">
                {displayedBikes.map((bike) => (
                    <BikeDetails key={bike._id} bike={bike} />
                ))}
            </div>
            <div className="mx-auto text-center mt-6 mb-6">
        <button
          className="bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
