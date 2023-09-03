import React from "react";
import "./Portfolio.scss";
import { workImages } from "../../../Data";
import { FiGithub, FiEye } from "react-icons/fi";
import { motion } from "framer-motion";
import useMediaQuery from "../../../hooks/useMediaQuery";

const Portfolio = () => {
  const tablet = useMediaQuery("(max-width: 769px)");
  console.log(tablet);

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
          if (work.url == null) {
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

                {tablet && (
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <a
                      style={{
                        display: "inline",
                        textDecoration: "none",
                        border: "1px solid #EB9C5C",
                        padding: "0.1rem 0.5rem",
                        borderRadius: "12px",
                        background:
                          "linear-gradient(to bottom, #EB9C5C, white)",
                        color: "#1F1F1F",
                        fontSize: "14px",
                      }}
                      href={work.repo}
                    >
                      Repo
                    </a>
                  </div>
                )}
              </div>
            );
          } else if (work.url && work.repo == null) {
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
                {tablet && (
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <a
                      style={{
                        display: "inline",
                        textDecoration: "none",
                        border: "1px solid #EB9C5C",
                        padding: "0.1rem 0.5rem",
                        borderRadius: "12px",
                        background:
                          "linear-gradient(to bottom, #EB9C5C, white)",
                        color: "#1F1F1F",
                        fontSize: "14px",
                      }}
                      href={work.url}
                    >
                      URL
                    </a>
                  </div>
                )}
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
                    href={work.repo}
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 1.1] }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiGithub />
                  </motion.a>
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
                {tablet && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "1rem",
                      marginTop: "6px",
                    }}
                  >
                    <a
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1rem",
                        textDecoration: "none",
                        border: "1px solid #EB9C5C",
                        padding: "0.1rem 0.5rem",
                        borderRadius: "12px",
                        background:
                          "linear-gradient(to bottom, #EB9C5C, white)",
                        color: "#1F1F1F",
                        fontSize: "14px",
                      }}
                      href={work.url}
                    >
                      URL
                    </a>
                    <a
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1rem",
                        textDecoration: "none",
                        border: "1px solid #EB9C5C",
                        padding: "0.1rem 0.5rem",
                        borderRadius: "12px",
                        background:
                          "linear-gradient(to bottom, #EB9C5C, white)",
                        color: "#1F1F1F",
                        fontSize: "14px",
                      }}
                      href={work.repo}
                    >
                      Repo
                    </a>
                  </div>
                )}
              </div>
            );
          }
        })}
      </motion.div>
    </div>
  );
};

export default Portfolio;
