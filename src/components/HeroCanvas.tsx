import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { Vector3 } from 'three';

interface ModelProps {
  url: string;
  position?: [number, number, number];
  scale?: number;
}

const Model = ({ url, position = [0, 0, 0], scale = 1 }: ModelProps) => {
  const gltf = useGLTF(url);
  const modelRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.2;
      
      // Gentle floating motion
      const time = state.clock.getElapsedTime();
      modelRef.current.position.y = position[1] + Math.sin(time) * 0.1;
    }
  });

  return (
    <primitive 
      ref={modelRef}
      object={gltf.scene} 
      position={position}
      scale={[scale, scale, scale]}
    />
  );
};

interface HeroCanvasProps {
  modelUrl: string;
  className?: string;
}

const HeroCanvas = ({ modelUrl, className = '' }: HeroCanvasProps) => {
  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <Model url={modelUrl} position={[0, 0, 0]} scale={2} />
          <Environment preset="city" />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate 
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
