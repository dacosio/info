import React from "react";
import "./About.scss";

import { motion } from "framer-motion";
import { bios } from "../../../Data";
import portfolio from "../../../assets/portfolio.jpg";
const About = () => {
  return (
    <div className="container " id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left"
        >
          <motion.img
            src={portfolio}
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div
          className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>
            Don is a fullstack web developer with a bachelor's degree
            <br />
            in electrical engineering. He worked for multiple Fortune 500
            company like Cisco Systems, Fluor Daniel Inc., and Airliquide.
            <br /> He went to a coding bootcamp in Hong Kong and is currently
            taking post-degree diploma in web and mobile applications
            development in Vancouver.
          </p>
          {bios.map((bio) => {
            return (
              <div className="bio" key={bio.id}>
                <span className="bioKey">
                  {bio.icon}
                  {bio.key}
                </span>
                <span className="bioValue">{bio.value}</span>
              </div>
            );
          })}
          <div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
