import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState, useEffect } from "react";
import { Earth } from "./Earth";
import useStore from "../store";

export function Scene() {
  const theme = useStore((state) => state.theme);
  return (
    <div className="scene">
      <span className="scene__arrow">
        <span>Interact with the earth</span>
      </span>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [3, 1.5, 10],
        }}
      >
        <OrbitControls makeDefault panSpeed={1} maxZoom={1} />

        <directionalLight castShadow position={[1, 2, 3]} intensity={1.2} />
        <ambientLight intensity={0.5} />

        <Earth />
      </Canvas>
    </div>
  );
}
