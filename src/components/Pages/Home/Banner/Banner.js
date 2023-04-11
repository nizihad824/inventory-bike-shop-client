import React from "react";
import bike10 from "../../../assets/bike-10.jpg";

const Banner = () => {
  return (
    <div className="hero max-w-[1440px] max-h-[500px] " style={{ backgroundImage: `url(${bike10})` }}>
      
      <div className="hero-content text-center text-neutral-content  inset-0 flex items-center py-96">
        <div className="max-w-sm m-auto">
          {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1> */}
          {/* <p className="mb-5 bg-blue-100 rounded-2xl text-black font-bold ">
          Ride with confidence and make every journey unforgettable on our meticulously designed bikes
          </p> */}
          {/* <button className="btn btn-primary">Discover Us</button> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
