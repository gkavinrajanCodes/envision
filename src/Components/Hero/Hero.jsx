import React, { useState } from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
import { Loader2 } from 'lucide-react';
import CountdownClock from '../CountdownClock/CountdownClock';
import heroVideo from '../../assets/envision-video.mp4';
import aycLogo from '../../assets/ayc.png';
import planpolLogo from '../../assets/planpol.png';
import Sponsors from '../Sponsors/Sponsors';

const Hero = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegisterClick = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      window.location.href="";
    } catch (err) {
      setError('Unable to open registration form. Please try again.');
      console.error('Registration error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="hero" id="hero">
      <video autoPlay muted loop playsInline className="hero-video">
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-text">
        <Sponsors />
        <div className="title-sponsor-section">
          <div className="sponsor-logos-container">
            <img src={aycLogo} alt="AYC Title Sponsor" className="sponsor-logo" />
            <span className="sponsor-separator">&</span>
            <img src={planpolLogo} alt="PlanPol Title Sponsor" className="sponsor-logo planpol-logo" />
          </div>
          <span className="presents-text">PRESENTS</span>
        </div>
        <h1>ENVISION 2026</h1>
        <div className="hero-subtitle">24-HOUR HACKATHON</div>
        <br></br>
        {/* <div className="hero-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          24h Hackathon
        </div> */}
        <div className="hero-location">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          SSN College of Engineering
        </div>
        <br></br>
        <button 
          onClick={handleRegisterClick} 
          className="register-btn"
          disabled={true}
        >
          {isLoading ? (
            <>
              <Loader2 className="spinner" size={20} />
              Redirecting...
            </>
          ) : (
            'REGISTRATIONS CLOSED!'
          )}
        </button>
        {error && <p className="error-message">{error}</p>}
      </div>

      <div className="cash-prize">
        <div className="prize-pool-banner">
          <span className="pool-label">Prize Pool</span>
          <span className="pool-amount">₹30,000</span>
        </div>
        
        <div className="prizes-grid">
          <div className="prize-card">
            <span className="prize-label">1st Prize</span>
            <span className="prize-amount">₹15,000</span>
          </div>
          <div className="prize-card">
            <span className="prize-label">2nd Prize</span>
            <span className="prize-amount">₹10,000</span>
          </div>
          <div className="prize-card">
            <span className="prize-label">3rd Prize</span>
            <span className="prize-amount">₹5,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
