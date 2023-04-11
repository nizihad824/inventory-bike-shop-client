import React from "react";
import bike10 from "../../../assets/bike-12.jpg";
import { Canvas } from "@react-three/fiber";
import RotatingImage from "../../../CubeLoader/RotatingImage";

const Banner = () => {
  return (
    <div className="hero w-[1440px] h-[700px]" style={{ position: 'relative' }}>
    <Canvas style={{ position: 'absolute', zIndex: 1, width: '100%', height: '100%' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <RotatingImage imageUrl={bike10} />
    </Canvas>
    <div className="hero-content text-center text-neutral-content  inset-0 flex items-center py-96" style={{ position: 'relative', zIndex: 2 }}>
      <div className="max-w-sm m-auto">
        {/* <button className="btn btn-primary">Discover Us</button> */}
      </div>
    </div>
  </div>
  );
};

export default Banner;
