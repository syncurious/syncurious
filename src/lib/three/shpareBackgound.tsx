'use client';
import { Canvas } from '@react-three/fiber';

export default function ShpareBackgound() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '50vh', zIndex: -1 }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#00ff00" />
        </mesh>
      </Canvas>
    </div>
  );
}