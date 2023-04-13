import React from "react";
import bike10 from "../../../assets/bike-13.jpeg";

const Banner = () => {
  return (
    <div className="hero rounded-md shadow-xl max-w-[1440px] max-h-[500px] py-64 mt-2" style={{ backgroundImage: `url(${bike10})` }}>

<div className="main-content"
 style={{  zIndex: 2 }}
 >
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row mx-0 ">
          {/* <div  className="max-w-sm shadow-2xl ">
          <h1 className="text-5xl  text-sky-500/100 bg-white  font-bold p-6">Life is short, buy the bike</h1>
          </div> */}
        </div>
      </div>
      
    </div>
      
      
  
</div>
    
  );
};

export default Banner;
