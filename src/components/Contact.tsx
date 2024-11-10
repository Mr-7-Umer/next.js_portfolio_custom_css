import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import "../app/styles/contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-grid">
        <div className="contact-left">
          <h2 className="contact-heading" data-aos="zoom-in-up">
            Get in Touch
          </h2>
          <p className="contact-description" data-aos="zoom-in-up">
            Drop me a message, give me a call, or send me a message.
          </p>

          <div className="contact-item" data-aos="zoom-in-up">
            <AiOutlineMail size={30} /> bsmumer@gmail.com
          </div>
          <div className="contact-item" data-aos="zoom-in-up">
            <BsTelephone size={30} /> 03152092395
          </div>
        </div>

        <div className="contact-right">
          <div className="form-group" data-aos="zoom-in-up">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-input" id="name" />
          </div>

          <div className="form-group" data-aos="zoom-in-up">
            <label htmlFor="email">Email</label>
            <input type="text" className="form-input" id="email" />
          </div>

          <div className="form-group" data-aos="zoom-in-up">
            <label htmlFor="msg">Message</label>
            <textarea className="form-textarea" id="msg" rows={8}></textarea>
          </div>

          <button className="submit-button" data-aos="zoom-in-up">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
