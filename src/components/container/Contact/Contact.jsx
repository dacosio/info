import React, { useRef } from "react";
import "./Contact.scss";
import { contacts } from "../../../Data";
import { socialIcons } from "../../../Data";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
const Contact = () => {
  const form = useRef();
  const notifySuccess = () => toast.success("Email sent!");
  const notifyError = () => toast.error("Email not sent! Try again later.");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ahi7xib",
        "template_i7ikhcf",
        form.current,
        "qXUVzS-jO3yakeMX-"
      )
      .then((result) => {
        console.log(result.text);
        if (result.text === "OK") {
          notifySuccess();
        } else {
          notifyError();
        }
      });
  };

  return (
    <div className="container" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>get in touch</span>
        <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_left_container"
        >
          <h3>Just Say Hi...or hire me!</h3>
          <p className="contact_text">
            You may reach me via email, mobile number, and by filling up the
            fields into your right.
          </p>
          {contacts.map((contact) => {
            return (
              <div className="contact_left" key={contact.id}>
                <div className="icon">{contact.icon}</div>
                <p>{contact.infoText}</p>
              </div>
            );
          })}
          <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
              return (
                <div key={index}>
                  <a
                    href={socialIcon.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {socialIcon.faIcon}
                  </a>
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_right"
        >
          <h3>Get In Touch</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="row">
              <input type="text" name="firstName" placeholder="First Name" />
              <input type="text" placeholder="Last Name" name="lastName" />
            </div>
            <div className="row">
              <input
                type="tel"
                placeholder="Mobile Number"
                name="mobileNumber"
              />

              <input type="email" placeholder="Email" name="email" required />
            </div>
            <div className="row">
              <textarea type="text" name="messageBody" placeholder="Message" />
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="btn"
            >
              <input id="submitBtn" type="submit" value="Send" />
            </motion.div>
          </form>
        </motion.div>
      </div>
      <Toaster />
    </div>
  );
};

export default Contact;
