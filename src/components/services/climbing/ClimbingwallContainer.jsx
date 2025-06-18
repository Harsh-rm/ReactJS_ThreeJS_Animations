import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Climbingwall } from "./Climbingwall";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const ClimbingwallContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="city" intensity={0}>
          <Climbingwall />
        </Stage>
        <OrbitControls enableZoom={false} enableRotate={false} />
        <PerspectiveCamera position={[1.2, -0.7, 1.5]} zoom={0.8} makeDefault/>
      </Suspense>
    </Canvas>
  );
};

export default ClimbingwallContainer;
