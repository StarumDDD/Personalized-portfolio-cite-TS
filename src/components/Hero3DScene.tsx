import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import BasicCuboid from './BasicCuboid';

const Hero3DScene: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <Suspense fallback={null}>
          <BasicCuboid position={[-1.5, 0, 0]} color="#4285F4" hoveredColor="#EA4335" />
          <BasicCuboid position={[0, 0, 0]} color="#FBBC05" hoveredColor="#34A853" size={[0.8, 0.8, 0.8]} />
          <BasicCuboid position={[1.5, 0, 0]} color="#34A853" hoveredColor="#4285F4" />
          
          <Environment preset="city" />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero3DScene;