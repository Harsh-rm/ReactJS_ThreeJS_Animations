import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { MacbookModelEdited } from "./MacbookModelEdited";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const MacbookModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="sunset" intensity={0.01}>
          <MacbookModelEdited />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate/>
        <PerspectiveCamera position={[-1,0,1.8]} zoom={0.8} makeDefault/>
      </Suspense>
    </Canvas>
  );
};

export default MacbookModelContainer;
