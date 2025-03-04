"use client";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { PointLight } from "three";

function AnimatedLights() {
  const light1Ref = useRef<PointLight>(null);
  const light2Ref = useRef<PointLight>(null);
  const light3Ref = useRef<PointLight>(null);

  const duration = 1.5; // Duration in seconds

  useEffect(() => {
    if (!light1Ref.current || !light2Ref.current || !light3Ref.current) return;

    gsap.to(light1Ref.current.position, {
      x: 0,
      duration: duration,
      ease: "power4.out",
    });
    gsap.to(light2Ref.current.position, {
      x: 1.5,
      duration: duration,
      ease: "power4.out",
    });
    gsap.to(light3Ref.current.position, {
      x: -1.5,
      duration: duration,
      ease: "power4.out",
    });

    return () => gsap.killTweensOf([light1Ref.current, light2Ref.current, light3Ref.current]);
  }, []);

  return (
    <>
      <pointLight ref={light1Ref} position={[-7.0, 1.0, 2.5]} intensity={1} color={"#00ff00"} />
      <pointLight ref={light2Ref} position={[-7.5, 0.5, 2.5]} intensity={1} color={"#00ff00"} />
      <pointLight ref={light3Ref} position={[-7.5, 0.5, 2.5]} intensity={1} color={"#00ff00"} />
    </>
  );
}

export default function ShpareBackgound() {
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
      <Canvas>
        <color attach="background" args={["#000"]} />
        <AnimatedLights />
        <mesh position={[0, -3.0, 2.0]}>
          <sphereGeometry args={[3.5, 512, 512]} />
          <meshStandardMaterial color="#00ff00" />
        </mesh>
      </Canvas>
    </div>
  );
}
