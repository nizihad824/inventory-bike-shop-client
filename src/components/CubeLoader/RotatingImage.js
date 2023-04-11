import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TextureLoader, DoubleSide } from 'three';

const RotatingImage = ({ imageUrl }) => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
  });

  const texture = new TextureLoader().load(imageUrl);

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <meshBasicMaterial map={texture} side={DoubleSide} />
    </mesh>
  );
};

export default RotatingImage;
