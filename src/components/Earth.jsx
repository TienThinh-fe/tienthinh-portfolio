import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function Earth() {
  const model = useGLTF("/scene.gltf");
  const modelRef = useRef();

  useFrame((state, delta) => {
    modelRef.current.rotation.y += delta / 3;
  });

  return (
    <primitive
      ref={modelRef}
      object={model.scene}
      dispose={null}
      scale={0.24}
    />
  );
}
