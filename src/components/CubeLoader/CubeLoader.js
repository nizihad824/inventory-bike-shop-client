import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

const SpinningCube = () => {
    const [rotationSpeed] = useState(() => [Math.random() * 0.01, Math.random() * 0.01, Math.random() * 0.01]);
    const mesh = useRef();
  
    useFrame(() => {
      mesh.current.rotation.x += rotationSpeed[0];
      mesh.current.rotation.y += rotationSpeed[1];
      mesh.current.rotation.z += rotationSpeed[2];
    });
  
    return (
      <Box ref={mesh} args={[2, 2, 2]} position={[0, 0, 0]}>
        <meshStandardMaterial color={'white'} />
      </Box>
    );
  };

const CubeLoader = () => {
  return (
    <Canvas
      style={{ width: '100%', height: '100%' }}
      camera={{ position: [2, 2, 2] }}
      shadows
    >
      <color attach="background" args={['#9DC5BB']}  />
      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} castShadow />
      <React.Suspense fallback={null}>
        <SpinningCube />
      </React.Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default CubeLoader;
