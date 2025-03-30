import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

interface LogoMeshProps {
  position?: [number, number, number];
}

const LogoMesh = ({ position = [0, 0, 0] }: LogoMeshProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.x += delta * 0.25;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={1.5}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#4285F4"
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
};

const ThreeJsLogo = () => {
  return (
    <Canvas
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      camera={{ position: [0, 0, 5], fov: 45 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <LogoMesh />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default ThreeJsLogo;
