import React from 'react';
import { useNavigate } from 'react-router-dom';

const BikeDetails = ({ bike }) => {

    const navigate = useNavigate();
    const handleDetailsClick = () => {
        navigate(`/bike/${bike.id}`);
      };
    return (
      <div className="card bordered w-full p-4">
        <figure>
          <img src={bike.img} alt={bike.name} className="h-64 w-full object-cover rounded-md" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-semibold">{bike.name}</h2>
          <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleDetailsClick}
      >
        Details
      </button>
        </div>
      </div>
    );
  };

export default BikeDetails;
