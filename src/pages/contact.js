import React from "react";
import "../components/styles/contact.css";
import ContactImg from "../assets/images/photo.jpeg";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ContactImg})` }}></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" placeholder="Enter You Name" />
          <label htmlFor="email">Email</label>
          <input type="email" name="name" placeholder="Enter You Email" />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
