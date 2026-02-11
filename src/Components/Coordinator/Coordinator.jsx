// Coordinator.jsx
import React from "react";
import "./Coordinator.css";
import facultyCoordinatorPhoto from "../../assets/vasuki.jpg"; // Update path as needed

const FacultyCoordinator = () => {
  return (
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
  );
};

const StudentCoordinators = () => {
  return (
    <div className="section">
        <h2 className="subtitle">STUDENT COORDINATORS</h2>
        <div className="responsive-columns">


          {/* Fourth Year Coordinators */}
          <div className="column">
            <h3 className="year-title">Fourth Year</h3>
            <div className="card">
              <h4>Dunya Syed Hassan</h4>
              <p>Chairperson</p>
              <p>7358273227</p>
              <p>dunya2210430@ssn.edu.in</p>
            </div>
            <div className="card">
              <h4>R Rohan</h4>
              <p>Secretary</p>
              <p>9789876485</p>
              <p>rrohan2210375@ssn.edu.in</p>
            </div>
            <div className="card">
              <h4>G Kavin Rajan</h4>
              <p>Web Master</p>
              <p>9354902664</p>
              <p>kavinrajan2210227@ssn.edu.in</p>
            </div>
          </div>

          {/* Third Year Coordinators */}
          <div className="column">
            <h3 className="year-title">Third Year</h3>
            <div className="card">
              <h4>Meghana Kumar</h4>
              <p>Joint Secretary</p>
              <p>9600102412</p>
              <p>meghana2310410@ssn.edu.in</p>
            </div>
            <div className="card">
              <h4>Amudhakavi S</h4>
              <p>General Secretary</p>
              <p>9789944566</p>
              <p>amudhakavi2370040@ssn.edu.in</p>
            </div>
            <div className="card">
              <h4>Vishal Muralidharan</h4>
              <p>Digital Marketing Head</p>
              <p>6382345578</p>
              <p>vishal2310253@ssn.edu.in</p>
            </div>
            <div className="card">
              <h4>Akshayalakshmi S</h4>
              <p>Editorial Head</p>
              <p>7695895578</p>
              <p>akshayalakshmi2310099@ssn.edu.in</p>
            </div>
          </div>
        </div>
      </div>
  );
};

const Coordinator = () => {
  return (
    <div className="coordinator-container">
      <h1 className="title">COORDINATORS</h1>

      {/* Faculty Coordinators */}
      <FacultyCoordinator />

      {/* Student Coordinators */}
      <StudentCoordinators />

    </div>
  );
};

export default Coordinator;