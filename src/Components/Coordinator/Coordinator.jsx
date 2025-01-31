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
              <h4>Priyamvadha Pradeep</h4>
              <p>Chairperson</p>
              <p>95660 64483</p>
              <p>priyamvadha2110269@ssn.edu.in</p>
            </div>
            <div className="card">
              <h4>Sanjjit S</h4>
              <p>Co Chairperson</p>
              <p>75502 79632</p>
              <p>sanjjit2110378@ssn.edu.in</p>
            </div>
            <div className="card">
              <h4>Harshida S P</h4>
              <p>Vice Chair</p>
              <p>72009 95167</p>
              <p>harshida2110349@ssn.edu.in</p>
            </div>
            <div className="card">
              <h4>Sanjai Balajee K G</h4>
              <p>Secretary</p>
              <p>82202 67097</p>
              <p>sanjai2110173@ssn.edu.in</p>
            </div>
            <div className="card">
              <h4>Priyanka Vijaybhaskar</h4>
              <p>Treasurer</p>
              <p>63851 54151</p>
              <p>priyanka2110274@ssn.edu.in</p>
            </div>
          </div>

          {/* Third Year Coordinators */}
          <div className="column">
            <h3 className="year-title">Third Year</h3>
            <div className="card">
              <h4>Dunya Syed Hassan</h4>
              <p>Joint Secretary</p>
              <p>73582 73227</p>
              <p>dunya2210430@ssn.edu.in</p>
            </div>
            <div className="card">
              <h4>Chandravel S</h4>
              <p>General Secretary</p>
              <p>73059 75595</p>
              <p>chandravel2210400@ssn.edu.in</p>
            </div>
            <div className="card">
              <h4>Nithish Kumar S</h4>
              <p>Event Management Head</p>
              <p>63748 51149</p>
              <p>98945 94609</p>
              <p>nithishkumar2210202@ssn.edu.in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coordinator;