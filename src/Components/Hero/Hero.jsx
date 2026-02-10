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
      // Replace with your Google Form URL
      window.location.href = 'https://forms.gle/Zxuny4uLUAQ5V77k6';
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
        <h1>ENVISION 2026</h1>
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
        <h2>WIN BIG</h2>
        <div className="prize-list">
          <div className="prize-item prize-second">
            <span className="emoji">🥈</span>
            <span>2nd Prize</span>
            <span className="amount">₹10,000</span>
          </div>
          <div className="prize-item prize-first">
            <span className="emoji">🏆</span>
            <span>1st Prize</span>
            <span className="amount">₹15,000</span>
          </div>
          <div className="prize-item prize-third">
            <span className="emoji">🥉</span>
            <span>3rd Prize</span>
            <span className="amount">₹5,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
