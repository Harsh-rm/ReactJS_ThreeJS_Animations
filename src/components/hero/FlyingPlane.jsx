import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

const FlyingPlane = ({ startX = -16, startY = 6.5, startZ = -5, speed = 0.04, size = 60 }) => {
  const ref = useRef();

  // Animate the plane's movement along the x-axis
  useFrame(() => {
    if (ref.current) {
      ref.current.position.x += speed;
      if (ref.current.position.x > 16) {
        ref.current.position.x = startX; // Reset position after it goes off-screen
      }
    }
  });

  return (
    <group ref={ref} position={[startX, startY, startZ]}>
      <Html>
        <img
          src="/plane.png" // Ensure the plane.png exists and is accessible
          alt="Flying plane"
          style={{
            width: size, // Control the size of the plane
            transform: "rotate(5deg)", // Give the plane a slight rotation
          }}
        />
      </Html>
    </group>
  );
};

export default FlyingPlane;