import React, { useState } from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

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
            <img src={phone_icon} alt="" />
            +91 95660 64483
          </li>
          <li>
            <img src={location_icon} alt="" />
            IT Seminar Hall, SSN College of Engineering, Chennai - 603110
          </li>
        </ul>
        <button
          className="btn dark-btn directions-btn"
          onClick={() => setModalOpen(true)}
        >
          View Directions
        </button>
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
      {modalOpen && (
  <div className="modal-overlay">
    <div className="modal">
      <h4>Directions to SSN College of Engineering</h4>
      <div className="directions-container">
        <div className="directions-row">
          <h5>From Chennai Central (44 km):</h5>
          <ul>
            <li>Hire an auto/taxi.</li>
            <li>Board 221 bus directly from Central to SSN.</li>
            <li>Take the metro from Central to Airport (refer to "Airport" directions below).</li>
          </ul>
        </div>
        <div className="directions-row">
          <h5>From Egmore Station (40 km):</h5>
          <ul>
            <li>Hire an auto/taxi.</li>
            <li>Catch the 40603/40605 train from Egmore to Tambaram and 515 from Tambaram to SSN.</li>
          </ul>
        </div>
        <div className="directions-row">
          <h5>From CMBT (43 km):</h5>
          <ul>
            <li>Board direct bus 570X from CMBT to SSN.</li>
            <li>Take the metro from CMBT to Airport (refer to "Airport" directions below).</li>
          </ul>
        </div>
        <div className="directions-row">
          <h5>From Airport (38km):</h5>
          <ul>
            <li>Walk to Tirusulam bus stop and board 70C to Tambaram or go to Tirusulam railway station and board 40603/40605 to Tambaram railway station and 515 from Tambaram to SSN.</li>
          </ul>
        </div>
      </div>
      <button className="btn close-btn" onClick={() => setModalOpen(false)}>
        Close
      </button>
    </div>
  </div>
)}
    </div>
  );
};

export default Contact;
