import React, { useEffect, useState } from "react";
import "./Portfolio.scss";
import { workImages } from "../../../Data";
import { FiGithub, FiEye } from "react-icons/fi";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div className="container" id="portfolio">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>My Work</span>
        <h1>Awesome Projects</h1>
      </motion.div>
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [-250, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, y: -50 }}
        className="workImages"
      >
        {workImages.map((work) => {
          if (work.repo != null) {
            return (
              <div className="workImage" key={work.id}>
                <img src={work.img} alt="workImg" />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="hoverLayer"
                >
                  <motion.a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={work.repo}
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 1.1] }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiGithub />
                  </motion.a>
                </motion.div>
              </div>
            );
          } else {
            return (
              <div className="workImage" key={work.id}>
                <img src={work.img} alt="workImg" />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="hoverLayer"
                >
                  <motion.a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={work.url}
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 1.1] }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiEye />
                  </motion.a>
                </motion.div>
              </div>
            );
          }
        })}
      </motion.div>
    </div>
  );
};

export default Portfolio;
