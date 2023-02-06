import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function Placeholder(props) {
  const modelRef = useRef();

  useFrame((state, delta) => {
    modelRef.current.rotation.y += delta / 3;
    modelRef.current.rotation.x += delta / 3;
  });

  return (
    <mesh {...props} ref={modelRef}>
      <boxGeometry />
      <meshStandardMaterial color="red" wireframe />
    </mesh>
  );
}
