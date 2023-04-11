import React from 'react';
import { Link} from 'react-router-dom';

const BikeDetails = ({ bike }) => {
  // console.log("Bike",bike);

    // const navigate = useNavigate();
    // // const handleDetailsClick = () => {
    // //     navigate(`/bike/${bike._id}`);
    // //   };
    return (
      <div className="card shadow-2xl bg-sky-100 p-6  w-full">
        <figure>
          <img src={bike.img} alt={bike.name} className="h-64 w-full object-cover rounded-md" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-blue-600 text-xl font-bold">{bike.name}</h2>
          <h2 className="card-title text-blue-600 text-sm font-bold">Stocks: {bike.quantity}</h2>
          <Link  to={`/bike/${bike._id}`}>
          <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        // onClick={handleDetailsClick}
      >
        Details
      </button>
          </Link>
         
      
        </div>
      </div>
    );
  };

export default BikeDetails;
