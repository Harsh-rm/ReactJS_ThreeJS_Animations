import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    img: "/p1.png",
    title: "Spark Stream-Engine and Player Performance Charts",
    desc: "Developing a low‑latency, secure streaming pipeline on AWS—optimising encoder configuration, edge-to-cloud ingestion, and failover mechanisms to improve reliability and user experience during live gameplay streams.",
    link: "https://www.sparkmysport.com/",
  },
  {
    id: 2,
    img: "/p2.png",
    title: "Resource Utilization Reports and Customer Support Tools",
    desc: "Implemented RESTful APIs with a uniform interface, ensuring that resources were identifiable and had distinct representations, enabling more efficient data manipulation and transfer within the data pipeline. |Worked hands-on in collaboration with the analytics team to construct robust data pipelines by utilizing Apache NiFi and Spark for the ETL processes, storing datasets in an analytics PostgreSQL database.",
    link: "https://www.keyusa.com/aboutus.html",
  },
  {
    id: 3,
    img: "/p3.png",
    title: "Docker‑compatible SpringBoot microservices with Gilhari",
    desc: "I architected and implemented microservices using Java Spring Boot integrated with Software Tree’s Gilhari framework, enabling seamless JSON-to-relational data persistence. |Leveraging Gilhari’s metadata-driven, ORM‑backed REST APIs with JDX, I accelerated the delivery of CRUD endpoints without needing to hand‑write complex SQL or boilerplate code.",
    link: "https://www.softwaretree.com/v1/products/gilhari/gilhari_introduction.php",
  },
  {
    id: 4,
    img: "/p4.png",
    title: "Playing Atari: Breakout with Aritificial Intelligence",
    desc: "This project explores the development of an AI agent using deep reinforcement learning techniques for playing Atari 2600 games. By leveraging Gymnasium as the environment and implementing the Deep Q-Network (DQN) algorithm, the agent learns to interpret game states, make decisions, and maximize its score.| The architecture incorporates convolutional layers to extract relevant features from preprocessed grayscale images, while experience replay prevents network divergence.The results showcase the efficacy of deep reinforcement learning in training an AI agent to master complex gameplay tasks.",
    link: "https://github.com/Harsh-rm/Masters_Program/tree/main/Research%20Projects",
  },
  {
    id: 5,
    img: "/p5.png",
    title: "NASA Space Launch Project",
    desc: "The user interface is built using the Arwes web framework which provides futuristic science fiction designs, animation and sound effects. It tries to inspire advanced science and technology.| The front end makes requests to the server through the express API on Node.js runtime hosted on your local machine.| The server is connected to the MongoDB database which is hosted on the cloud using the NodeJS Mongoose package following the MVC Pattern.",
    link: "https://github.com/Harsh-rm/Node.js/tree/main/Projects/NASA_Project",
  },
];

const imgVariants = {
  initial: {
    x: -400,
    y: 400,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 400,
    y: 400,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>

      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
      <img
        src={item.img}
        alt=""
        style={{
          width: item.id === 1 || item.id === 3 ? "1400px" : "1400px",
          height: item.id === 1 || item.id === 3 ? "480px" : "500px",
          objectFit: "cover",
          borderRadius: "12px",
        }}
      />

      </motion.div>

      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <div className={`title-offset title-${item.id}`}>
          <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        </div>

        <motion.p variants={textVariants}>
          {item.desc.split("|").map((block, blockIndex) => (
            <span className="sentence-block" key={blockIndex}>
              {block
                .split(".")
                .map((sentence, i) => sentence.trim())
                .filter(Boolean)
                .map((sentence, i, arr) => (
                  <span key={i}>
                    {sentence}.
                    {i < arr.length - 1 ? " " : ""}
                  </span>
                ))}
            </span>
          ))}
        </motion.p>

        <motion.div
        variants={textVariants}
        className={`button-offset button-offset-${item.id}`}
        >
          <motion.a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              {item.id === 4 || item.id === 5 ? "View Project" : "Visit Website"}
            </button>

          </motion.a>

        </motion.div>
        
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  const ref = useRef(null);
  const isPortfolioInView = useInView(ref, { once: false });

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setShowProgress(v > 0 && v < 1);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio container" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      {showProgress && (
        <div className="pProgress">
          <svg width="100%" height="100%" viewBox="0 0 160 160">
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#ddd"
              strokeWidth={20}
            />
            <motion.circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#dd4c62"
              strokeWidth={20}
              style={{ pathLength: scrollYProgress }}
              transform="rotate(-90 80 80)"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Portfolio;