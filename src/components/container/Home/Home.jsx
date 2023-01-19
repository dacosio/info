import React from "react";
import portfolio from "../../../assets/portfolio.jpg";
import "./Home.scss";
import { motion } from "framer-motion";
import cv from "../../../assets/cv.pdf";

const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1,
      },
    },
  };

  return (
    <motion.div
      className="container "
      id="home"
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        delay: 0.5,
      }}
    >
      <div className="profile">
        <img src={portfolio} alt="portfolio" />
      </div>
      <div className="profile_text">
        <h3 className="name">
          Hi, I'm <span>Don Cosio</span>{" "}
        </h3>
        <span className="job">Full Stack Developer</span>
        <span className="text">
          Think of
          <br /> Development <br /> and Innovation.
        </span>
        <motion.a
          href={cv}
          download="Don_Cosio_CV.pdf"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          Download CV
        </motion.a>
        <div className="web">Python</div>
        <div className="ui">Typescript</div>
        <div className="freelance">Fullstack</div>
      </div>
    </motion.div>
  );
};

export default Home;
