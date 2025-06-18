import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { SoccerJersey } from "./SoccerJersey";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const SoccerJerseyContainer = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Stage environment="night" intensity={0.5}>
          <SoccerJersey />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.8} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default SoccerJerseyContainer;
