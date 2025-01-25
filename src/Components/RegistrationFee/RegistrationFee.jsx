import React from 'react';
import './RegistrationFee.css';

const RegistrationFee = () => {
  return (
    <div className="registration-fee" id="registration-fee">
      <h2 className="fee-header">Registration Fee</h2>
      <div className="fee-cards">
        <div className="fee-card ieee-card">
          <h3>IEEE Members</h3>
          <p className="fee-price">₹200</p>
          <p className="fee-description">
            Avail exclusive discounts as an IEEE member. Ensure your IEEE membership ID is valid at the time of registration.
          </p>
        </div>
        <div className="fee-card non-ieee-card">
          <h3>Non-IEEE Members</h3>
          <p className="fee-price">₹250</p>
          <p className="fee-description">
            Join the event as a non-IEEE member and enjoy all the perks of participation. Consider joining IEEE for future benefits!
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFee;
