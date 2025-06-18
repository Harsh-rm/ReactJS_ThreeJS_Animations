import MacbookModelContainer from "./macbook/MacbookModelContainer";
import SoccerJerseyContainer from "./jersey/SoccerJerseyContainer";
import ClimbingwallContainer from "./climbing/ClimbingwallContainer";

import "./services.css";
import Counter from "./Counter";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

import Lottie from "lottie-react";
import SandsOfTimeWhite from "../../assets/animations/SandsOfTimeWhite.json"; 
import FlyingDollarBills from "../../assets/animations/FlyingDollarBills.json";

const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
};

const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const services = [
  {
    id: 1,
    img: "/service1.png",
    title: "In a programming enivronment",
    counter: 25,
  },
  {
    id: 2,
    img: "/service2.png",
    title: "Working on a streaming project",
    counter: 50,
  },
  {
    id: 3,
    img: "/service3.png",
    title: "My lifestyle and hobbies",
    counter: 7,
  },
];

const Services = () => {
  const [currentServiceId, setCurrentServiceId] = useState(1);
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });
  return (
    <div className="services container" ref={ref}>
      <div className="sSection left">

        <div className="sTitleContainer">
          <motion.h1
            variants={textVariants}
            animate={isInView ? "animate" : "initial"}
            className="sTitle"
          >
            <span>How do I&nbsp;</span>
            <span className="spendWordWrapper">
              <span className="flyingDollarContainer">
                <Lottie
                  animationData={FlyingDollarBills}
                  loop
                  autoplay
                  speed={1}
                  className="flyingDollar"
                />
              </span>
              <span className="spendWord">spend</span>
            </span>
          </motion.h1>

          <div className="sTitleSubContainer">
            <motion.h1
              variants={textVariants}
              animate={isInView ? "animate" : "initial"}
              className="sTitle"
            >
              my&nbsp;time
            </motion.h1>
            <Lottie
              animationData={SandsOfTimeWhite}
              loop
              autoplay
              speed={1}
              className="sLottie"
            />
            <motion.h1
              variants={textVariants}
              animate={isInView ? "animate" : "initial"}
              className="sTitle"
            >
              ?
            </motion.h1>
          </div>
        </div>
        
        <div className="serviceList">
          {services.map((service) => (
            <motion.div
              variants={listVariants}
              key={service.id}
              className="serviceWrapper"
              onClick={() => setCurrentServiceId(service.id)}
            >
              <div className="service">
                <div className="serviceIcon">
                  <img src={service.img} alt="" />
                </div>

                <div className="serviceInfo">
                  <h2>{service.title}</h2>
                  {service.id === 3 ? (
                    <h3>Climbing V{service.counter} Boulders</h3>
                  ) : service.id === 2 ? (
                    <h3>{service.counter}+ React Components and Cloud Services</h3>
                  ) : (
                    <h3>Developed more than {service.counter} Software Projects</h3>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="counterList">
          <Counter from={0} to={25} text="Microservices" />
          <Counter from={0} to={40} text="App functionalities" />
        </div>
      </div>
      <div className="sSection right">
        {currentServiceId === 1 ? (
          <MacbookModelContainer />
        ) : currentServiceId === 2 ? (
          <SoccerJerseyContainer />
        ) : (
          <ClimbingwallContainer />
        )}
      </div>
    </div>
  );
};

export default Services;