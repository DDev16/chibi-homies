// src/components/Gumball.js
import React, { useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

const Gumball = () => {
  const gumballMachineRef = useRef();

  const handleModelLoad = (gltf) => {
    const gumballMachine = gltf.scene;
    gumballMachineRef.current = gumballMachine;
  };

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.5} position={[1, 1, 1]} />
      <pointLight intensity={0.5} position={[-1, -1, -1]} />
      <group ref={gumballMachineRef} />
      <Suspense fallback={null}>
        <GLTFLoader onLoad={handleModelLoad} />
      </Suspense>
    </Canvas>
  );
};

export default Gumball;
