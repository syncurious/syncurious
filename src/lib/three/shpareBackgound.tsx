"use client";
import { Environment, Lightformer } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function ShpareBackgound() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "50vh",
        zIndex: -1,
      }}
    >
      <Canvas
        flat
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: false }}
        camera={{ position: [50, 50, 30], fov: 17.5, near: 0, far: 40 }}
      >
        <color attach="background" args={["#171717"]} />
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[2, 128, 128]} />
          <meshStandardMaterial
            color="#00ff00"
            roughness={0.2}
            metalness={0.5}
          />
        </mesh>
        <Environment resolution={256}>
          <group rotation={[-Math.PI / 3, 0, 1]}>
            {/* <Lightformer form="circle" intensity={100} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} /> */}
            {/* <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} /> */}
            {/* <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} /> */}
            <Lightformer
              form="circle"
              color="#171717"
              intensity={100}
              rotation-y={-Math.PI / 2}
              position={[7, 7, 0]}
              scale={15}
            />
            {/* <Lightformer form="ring" color="#171717" intensity={1000} onUpdate={(self) => self.lookAt(0, 0, 0)} position={[10, 10, 0]} scale={15} /> */}
          </group>
        </Environment>
        {/* <Effects /> */}
      </Canvas>
    </div>
  );
}
