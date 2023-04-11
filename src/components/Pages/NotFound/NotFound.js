import React from 'react';
// import CubeLoader from '../../CubeLoader/CubeLoader';
import notfound from "../../assets/404.jpg";

const NotFound = () => {
    return (
        <div>
            <div className="hero max-w-[1440px] max-h-[700px] " style={{ backgroundImage: `url(${notfound})` }}>
      
      <div className="hero-content text-center text-neutral-content  inset-0 flex items-center py-96">
        <div className="max-w-sm m-auto">
         
        </div>
      </div>
    </div>
        </div>
    );
};

export default NotFound;