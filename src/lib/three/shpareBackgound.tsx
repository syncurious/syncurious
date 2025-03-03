"use client";
import { Canvas } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import { PointLightHelper } from "three";
import { useRef } from "react";
import { PointLight } from "three";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

export default function ShpareBackgound() {
  const {
    lightPosition1,
    lightPosition2,
    lightPosition3,
    Lightintensity,
    spherePosition,
    sphereSize,
    steps,
  } = useControls({
    lightPosition1: { value: { x: 0, y: 1.0, z: 2.5 }, step: 0.1 },
    lightPosition2: { value: { x: 1.5, y: 0.5, z: 2.5 }, step: 0.1 },
    lightPosition3: { value: { x: -1.5, y: 0.5, z: 2.5 }, step: 0.1 },
    Lightintensity: { value: { x: 1, y: 1, z: 1 }, step: 0.1 },
    spherePosition: { value: { x: 0, y: -3.0, z: 2.0 }, step: 0.1 },
    sphereSize: { value: 3.5, min: 0.1, max: 100, step: 0.1 },
    steps: { value: 512, min: 16, max: 1000, step: 0.1 },
  });

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: -1,
      }}
    >
      <Leva />
      <Canvas>
        <color attach="background" args={["#000"]} />
        <pointLight
          position={[lightPosition1.x, lightPosition1.y, lightPosition1.z]}
          intensity={Lightintensity.x}
          color={"#00ff00"}
        />
        <pointLight
          position={[lightPosition2.x, lightPosition2.y, lightPosition2.z]}
          intensity={Lightintensity.y}
          color={"#00ff00"}
        />
        <pointLight
          position={[lightPosition3.x, lightPosition3.y, lightPosition3.z]}
          intensity={Lightintensity.z}
          color={"#00ff00"}
        />
        <mesh position={[spherePosition.x, spherePosition.y, spherePosition.z]}>
          <sphereGeometry args={[sphereSize, steps, steps]} />
          <meshStandardMaterial color="#00ff00" />
        </mesh>
        <EffectComposer>
          <Bloom
          
            luminanceThreshold={-1}
            luminanceSmoothing={0.3}
            height={200}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
