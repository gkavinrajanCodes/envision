import React, { useState } from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isDirectionsOpen, setIsDirectionsOpen] = useState(false);
  const [activeLocation, setActiveLocation] = useState(null);

  const toggleDirections = () => {
    setIsDirectionsOpen(!isDirectionsOpen);
  };

  const toggleLocation = (location) => {
    setActiveLocation((prev) => (prev === location ? null : location));
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4f90aa29-0279-49b1-9b64-7d5d14a14672");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>Feel free to contact us for any queries....</p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            ieeecs-ssn@ssn.edu.in
          </li>
          <li>
            <img src={location_icon} alt="" />
            IT Seminar Hall, SSN College of Engineering, Chennai - 603110
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name="name" placeholder="Enter your name" required />
          <label>Phone number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>College Name</label>
          <input
            type="text"
            name="college"
            placeholder="Enter your college name"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message here"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
