import { TypeAnimation } from "react-type-animation";
//import { motion } from "motion/react";
import { motion } from "framer-motion";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "I'm currently learning how to build RAG AI agents and use it automate dev processes in linux subsystems...",
            1000,
            "Please try out my custom voice assistant by clicking this chat box!",
            1000,
          ]}
          wrapper="span"
          speed={80}
          deletionSpeed={80}
          // omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      <img src="/GitHub_Profile.jpg" alt="" />
    </motion.div>
  );
};

export default Speech;