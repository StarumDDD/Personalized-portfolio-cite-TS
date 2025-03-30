import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';

interface BasicCuboidProps {
  position?: [number, number, number];
  color?: string;
  hoveredColor?: string;
  size?: [number, number, number];
}

const BasicCuboid: React.FC<BasicCuboidProps> = ({
  position = [0, 0, 0],
  color = '#4285F4',
  hoveredColor = '#EA4335',
  size = [1, 1, 1],
}) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = React.useState(false);
  
  // Spring animation for color
  const { currentColor } = useSpring({
    currentColor: hovered ? hoveredColor : color,
    config: { mass: 2, tension: 180, friction: 30 }
  });

  // Rotate on each frame
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.2;
      mesh.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <animated.mesh
      ref={mesh}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1}
    >
      <boxGeometry args={size} />
      <animated.meshStandardMaterial 
        color={currentColor} 
        metalness={0.5}
        roughness={0.2}
      />
    </animated.mesh>
  );
};

export default BasicCuboid;