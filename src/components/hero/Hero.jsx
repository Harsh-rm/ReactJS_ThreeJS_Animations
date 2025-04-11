import { Canvas } from "@react-three/fiber";
import "./hero.css";
import Speech from "./Speech";
//import { motion } from "motion/react";
import { motion } from "framer-motion";
import Shape from "./Shape";
import FlyingPlane from "./FlyingPlane";
import TiltWrapper from "./TiltWrapper";
import { Suspense } from "react";

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        {/* TITLE */}
        <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="hTitle"
            >
            <span className="shimmerText">Hello there,</span>
            <br />
            <span className="shimmerText">I'm</span>
            <span className="whiteText"> Harsh!</span>            
        </motion.h1>

        {/* AWARDS */}
        <motion.div
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="awards"
        >
          <motion.h2 variants={awardVariants}>I'm a Professional Software Developer</motion.h2>
          <motion.p variants={awardVariants}>
            I have a passion for creating innovative solutions that make a difference.
          </motion.p>
          <motion.p variants={awardVariants}>
            With over 2 years of experience in the industry, I have honed my skills in Full Stack Development and Machine Learning.
          </motion.p>
          <motion.p variants={awardVariants}>
            Bachelor's and Master's Degree in Computer Science and Engineering
          </motion.p>
          <motion.p variants={awardVariants}>
            Graduate Certificate in Machine Learning at Stevens Institute of Technology
          </motion.p>
        </motion.div>
        {/* SCROLL SVG */}
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          href="#services"
          className="scroll"
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>
      <div className="hSection right">
        {/* FOLLOW */}
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="follow"
        >
          <motion.a variants={followVariants} href="/">
            <img src="/LI-In-Bug.png" alt="" />
          </motion.a>
          <motion.a variants={followVariants} href="/">
            <img src="/github-mark-white.png" alt="" />
          </motion.a>
          <motion.a variants={followVariants} href="/">
            <img src="/leetcode.png" alt="" />
          </motion.a>
          <motion.div variants={followVariants} className="followTextContainer">
            <div className="followText">LET'S CONNECT</div>
          </motion.div>
        </motion.div>
        {/* CERTIFICATE */}
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="certificate"
        >
        <TiltWrapper>
          <img src="/NodeJS_Developer_Certificate.png" alt="Certificate" />
        </TiltWrapper>
        </motion.div>
        {/* SPEECH BUBBLE */}
        <Speech />
        {/* CONTACT BUTTON */}
        <motion.a
          href="/#contact"
          className="contactLink"
          animate={{
            x: [200, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 2,
          }}
        >
          <motion.div
            className="contactButton"
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="86%">
                  •
                </textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me
                </textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="36%">
                  •
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>
      <div className="bg">
        {/* 3d */}
        <Canvas className="shapeCanvas">
          <Suspense fallback="loading...">
            <Shape />
            <FlyingPlane startY={7} startZ={-4} speed={0.043} size={40} />
            <FlyingPlane startY={6.6} startZ={-5} speed={0.04} size={50} />
          </Suspense>
        </Canvas>

        <div className="hImg">
          <img src="/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;