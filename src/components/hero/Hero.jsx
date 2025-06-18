import { Canvas } from "@react-three/fiber";
import "./hero.css";
import Speech from "./Speech";
//import { motion } from "motion/react";
import { motion } from "framer-motion";
import Shape from "./Shape";
import FlyingPlane from "./FlyingPlane";
import TiltWrapper from "./TiltWrapper";
import { Suspense } from "react";

const descriptionVariants = {
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
    <div className="heroBackground">
    <div className="hero container">
      <div className="hSection left">
        {/* TITLE */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle"
        >
          <span className="shimmerText titleLine">Hello there,</span>
          <span className="titleLine">
            <span className="shimmerText">I'm</span>
            <span className="whiteText"> Harsh!</span>
          </span>
          
        </motion.h1>

        {/* Description */}
        <motion.div
          variants={descriptionVariants}
          initial="initial"
          animate="animate"
          className="description"
        >

          <motion.h2 variants={descriptionVariants}>I'm a Professional Full-Stack Software Engineer</motion.h2>
          <motion.p variants={descriptionVariants}>
            I approach programming as an art—each line of code is intentional, each feature is a brushstroke, each architecture a composed piece of subtle complexity. 
          </motion.p>
          
          <motion.p variants={descriptionVariants}>
            As Donald Knuth eloquently put it:
          </motion.p>
          <motion.p variants={descriptionVariants}>
            “When you write a program, think of it primarily as a work of literature… You’re trying to write something that human beings are going to read.”
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
          <motion.a variants={followVariants} 
            href="https://www.linkedin.com/in/harsh-rm1998/"
            target="_blank"
            rel="noopener noreferrer" >

            <img src="/LI-In-Bug.png" alt="LinkedIn" />

          </motion.a>
          <motion.a variants={followVariants} 
            href="https://github.com/Harsh-rm/"
            target="_blank"
            rel="noopener noreferrer" >

            <img src="/github-mark-white.png" alt="GitHub" />

          </motion.a>
          <motion.a variants={followVariants} 
            href="https://discord.gg/bNZ9TM67sj" 
            target="_blank"
            rel="noopener noreferrer" >

            <img src="/Discord-Symbol-Blurple.svg" alt="Discord" />

          </motion.a>
          <motion.div variants={followVariants} className="followTextContainer">
            <div className="followText">
              LET'S<span className="spaceSpan"></span>CONNECT
            </div>
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
          <Canvas className="shapeCanvas z-0">
            <Suspense fallback={null}>
              <Shape />
            </Suspense>
          </Canvas>
        </div>

        {/* FOREGROUND PLANES */}
        <div className="absolute top-0 left-0 w-full h-full z-3 pointer-events-none">
          <Canvas className="w-full h-full">
            <Suspense fallback={null}>
              <FlyingPlane startY={6.6} startZ={-4} speed={0.043} size={270} />
              <FlyingPlane startY={6.2} startZ={-5} speed={0.04} size={360} />
            </Suspense>
          </Canvas>
        </div>

        {/* MAIN HERO CONTENT */}
        <div className="hero">
          <div className="hImg">
            <img src="/hero.png" alt="My Image in Ghibli style" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;