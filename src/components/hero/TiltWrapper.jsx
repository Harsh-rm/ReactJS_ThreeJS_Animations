import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const TiltWrapper = ({ children, width = 370, height = 270, strength = 15 }) => {
  const ref = useRef(null);

  const x = useMotionValue(width / 2);
  const y = useMotionValue(height / 2);

  // Make it smooth using spring
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(springY, [0, height], [strength, -strength]);
  const rotateY = useTransform(springX, [0, width], [-strength, strength]);

  const handleMouseMove = (e) => {
    const bounds = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - bounds.left;
    const mouseY = e.clientY - bounds.top;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(width / 2);
    y.set(height / 2);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        width,
        height,
        perspective: 1000,
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "all 0.2s ease-out",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default TiltWrapper;