// Coordinator.jsx
import React from "react";
import "./Coordinator.css";
import facultyCoordinatorPhoto from "../../assets/vasuki.jpg"; // Update path as needed

const Coordinator = () => {
  return (
    <div className="coordinator-container">
      <h1 className="title">COORDINATORS</h1>

      {/* Faculty Coordinators */}
      <div className="section">
        <h2 className="subtitle">FACULTY COORDINATOR</h2>
        <div className="cards-container">
          <div className="card faculty-card">
            <div className="card-image-container">
              <img 
                src={facultyCoordinatorPhoto} 
                alt="Dr. Vasuki P" 
                className="card-image"
              />
            </div>
            <div className="card-content">
              <h3>Dr. Vasuki P</h3>
              <p>IEEECS - SB - Faculty Advisor</p>
              <p>IIC - Convener, SSNCE</p>
            </div>
          </div>
        </div>
      </div>

      {/* Student Coordinators */}
      <div className="section">
        <h2 className="subtitle">STUDENT COORDINATORS</h2>
        <div className="responsive-columns">


          {/* Fourth Year Coordinators */}
          <div className="column">
            <h3 className="year-title">Fourth Year</h3>
            <div className="card">
              <h4>Dunya Syed Hassan</h4>
              <p>Chairperson</p>
              {/* <p>Phone</p> */}
              {/* <p>Email</p> */}
            </div>
            <div className="card">
              <h4>Chandravel Saravanan</h4>
              <p>Co Chairperson</p>
              {/* <p>Phone</p> */}
              {/* <p>Email</p> */}
            </div>
            <div className="card">
              <h4>Nithish Kumar S</h4>
              <p>Vice Chairperson</p>
              {/* <p>Phone</p> */}
              {/* <p>Email</p> */}
            </div>
            <div className="card">
              <h4>R Rohan</h4>
              <p>Secretary</p>
              {/* <p>Phone</p> */}
              {/* <p>Email</p> */}
            </div>
            <div className="card">
              <h4>K V Swetha</h4>
              <p>Treasurer</p>
              {/* <p>Phone</p> */}
              {/* <p>Email</p> */}
            </div>
            <div className="card">
              <h4>G. Kavin Rajan</h4>
              <p>Web Master</p>
              {/* <p>Phone</p> */}
              {/* <p>Email</p> */}
            </div>
            <div className="card">
              <h4>Rupadharshini R</h4>
              <p>Joint-Treasurer</p>
              {/* <p>Phone</p> */}
              {/* <p>Email</p> */}
            </div>
            <div className="card">
              <h4>Ritujaa B</h4>
              <p>Design Head</p>
              {/* <p>Phone</p> */}
              {/* <p>Email</p> */}
            </div>
          </div>

          {/* Third Year Coordinators */}
          <div className="column">
            <h3 className="year-title">Third Year</h3>
            <div className="card">
              <h4>Meghana Kumar</h4>
              <p>Joint Secretary</p>
              {/* <p>Phone</p> */}
              {/* <p>Email</p> */}
            </div>
            <div className="card">
              <h4>Amudhakavi S</h4>
              <p>General Secretary</p>
              {/* <p>Phone</p> */}
              {/* <p>Email</p> */}
            </div>
            <div className="card">
              <h4>Pranav Krishna P</h4>
              <p>Technical Head</p>
              {/* <p>Phone</p> */}
              {/* <p>Email</p> */}
            </div>
            <div className="card">
              <h4>Darshan Parthasarathy</h4>
              <p>Event Management Head</p>
              {/* <p>Phone</p> */}
              {/* <p>Email</p> */}
            </div>
            <div className="card">
              <h4>Thirumurugan RA</h4>
              <p>Digital Marketing Head</p>
              {/* <p>Phone</p> */}
              {/* <p>Email</p> */}
            </div>
            <div className="card">
              <h4>Vishal Muralidharan</h4>
              <p>Digital Marketing Head</p>
              {/* <p>Phone</p> */}
              {/* <p>Email</p> */}
            </div>
            <div className="card">
              <h4>Akshayalakshmi S</h4>
              <p>Editorial Head</p>
              {/* <p>Phone</p> */}
              {/* <p>Email</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coordinator;