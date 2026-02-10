import React, { useState } from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
import { Loader2 } from 'lucide-react'; // This should now work
import CountdownClock from '../CountdownClock/CountdownClock';
import heroVideo from '../../assets/envision-video.mp4';

const Hero = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegisterClick = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      window.location.href="https://forms.gle/Zxuny4uLUAQ5V77k6";
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
        {/* <div className="hero-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          24Hr National Level Hackathon
        </div> */}
        <h1>ENVISION 2026</h1>
        <div className="hero-location">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          SSN College of Engineering
        </div>
        <p>Endless ideas, Infinite solutions, Amazing possibilities.</p>
        <button 
          onClick={handleRegisterClick} 
          className="register-btn"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="spinner" size={20} />
              Redirecting...
            </>
          ) : (
            'Register Now'
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
