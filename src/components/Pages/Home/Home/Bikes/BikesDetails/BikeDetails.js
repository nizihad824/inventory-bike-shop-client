import React from 'react';
import { Link} from 'react-router-dom';

const BikeDetails = ({ bike }) => {
  // console.log("Bike",bike);

    // const navigate = useNavigate();
    // // const handleDetailsClick = () => {
    // //     navigate(`/bike/${bike._id}`);
    // //   };
    return (
      <div className="card shadow-xl
          w-full">
        <figure>
          <img src={bike.img} alt={bike.name} className="h-64 w-full object-cover rounded-md" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#3e9748] text-xl font-bold">{bike.name}</h2>
          <h2 className="card-title text-[#2cc790] text-sm font-bold">Stocks: {bike.quantity}</h2>
          <Link  to={`/bike/${bike._id}`}>
          <button
        className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white  hover:bg-sky-500  py-2 px-4 rounded mt-4"
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
