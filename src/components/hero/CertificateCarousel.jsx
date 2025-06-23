import { useState, useEffect } from "react"; // ✅ added useEffect
import TiltWrapper from "./TiltWrapper";
import { motion, AnimatePresence } from "framer-motion";

const certificates = [
  "/NodeJS_Developer_Certificate.png",
  "/FullStack_Certificate.png",
  "/Graduate_Certificate.png",
  //"/ML_Certificate.png",
  "/Machine_Learning_A-Z_Certificate.png",
  "/SQL_DataScience_Certificate.png",
  "/Python_Certification.png",
  "/Paper_Presentation.png",
  "/Entrepreneurship_Certification.png",
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
    zIndex: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    zIndex: 1,
    transition: { duration: 0.6 },
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
    zIndex: 0,
    transition: { duration: 0.6 },
  }),
};

const swipeConfidenceThreshold = 1; // ✅ low value to improve sensitivity

export default function CertificateCarousel() {
  const [[index, direction], setIndex] = useState([0, 0]);

  // ✅ Function to change image (used by swipe & auto-scroll)
  const paginate = (newDirection) => {
    setIndex([
      (index + newDirection + certificates.length) % certificates.length,
      newDirection,
    ]);
  };

  // ✅ Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1); // Scroll forward
    }, 5000);

    // Cleanup on unmount or re-render
    return () => clearInterval(interval);
  }, [index]); // ✅ re-run when index changes (prevents double-swipe)

  // ✅ Trackpad (two-finger swipe) gesture handling
  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) > swipeConfidenceThreshold) {
      paginate(e.deltaX > 0 ? 1 : -1);
    }
  };

  return (
    <div
      className="carouselWrapper"
      onWheel={handleWheel}
      onTouchStart={(e) => (e.currentTarget.touchStartX = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        const deltaX = e.changedTouches[0].clientX - e.currentTarget.touchStartX;
        if (deltaX > swipeConfidenceThreshold) paginate(-1);
        if (deltaX < -swipeConfidenceThreshold) paginate(1);
      }}
    >
      <AnimatePresence custom={direction}>
        <motion.div
          key={index}
          className="carouselCard"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <TiltWrapper>
            <img
              src={certificates[index]}
              alt={`Certificate ${index + 1}`}
              draggable="false"
            />
          </TiltWrapper>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}