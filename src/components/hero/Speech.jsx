import { TypeAnimation } from "react-type-animation";
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
            "This chat box will soon be my personal AI-Voice assitant!",
            1000,
          ]}
          wrapper="span"
          speed={80}
          deletionSpeed={100}
          // omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      <img src="/LinkedIn_Profile.jpg" alt="" />
    </motion.div>
  );
};

export default Speech;