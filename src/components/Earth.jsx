import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function Earth() {
  const model = useGLTF("/planet.gltf");
  const modelRef = useRef();

  useFrame((state, delta) => {
    modelRef.current.rotation.y += delta / 3;
    modelRef.current.rotation.x += delta / 3;
  });

  return (
    <primitive ref={modelRef} object={model.scene} dispose={null} scale={1.6} />
  );
}
