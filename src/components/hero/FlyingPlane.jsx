import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

const FlyingPlane = ({
  startX = -16,
  startY = 6.5,
  startZ = -5,
  speed = 0.04,
  size = 80,
}) => {
  const ref = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useFrame(() => {
    if (ref.current) {
      ref.current.position.x += speed;
      if (ref.current.position.x > 16) {
        ref.current.position.x = startX;
      }

      // Apply hover effect to y-position (lift slightly)
      const targetY = isHovered ? startY + 0.5 : startY;
      ref.current.position.y += (targetY - ref.current.position.y) * 0.1;
    }
  });

  return (
    <group ref={ref} position={[startX, startY, startZ]}>
      <Html occlude={false} distanceFactor={1} transform>
        <img
          src="/plane.png"
          alt="Flying plane"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onPointerDown={(e) => {
            e.stopPropagation();
            console.log("Plane clicked!");
          }}
          style={{
            width: size,
            transform: isHovered ? "scale(1.1) rotate(5deg)" : "rotate(5deg)",
            transition: "transform 0.3s ease",
            cursor: "pointer",
          }}
        />
      </Html>
    </group>
  );
};

export default FlyingPlane;