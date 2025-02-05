import React, { useState } from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
import { Loader2 } from 'lucide-react'; // This should now work

const Hero = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegisterClick = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      // Replace with your Google Form URL
      window.location.href = 'https://forms.gle/Ykh9EK8gGkT6pW5S6';
    } catch (err) {
      setError('Unable to open registration form. Please try again.');
      console.error('Registration error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="hero container" id="hero">
      <div className="hero-text">
        <h1>Welcome to ENVISION 2025</h1>
        <p>Endless ideas, Infinite solutions, Amazing possibilities.</p>

        {/* Event Dates Section */}
        <div className="event-dates">
          <h3>Mark Your Calendars</h3>
          <p>February 19-20, 2025</p>
        </div>
        
        <div className="registration-deadline">
          <h3>Registration Deadline: 15 February 2025</h3>
        </div>

        <div className="cash-prize">
          <h2>Amazing Cash Prizes Await</h2>
          <div className="prize-list">
            <div className="prize-item">
              <span className="emoji">🥈</span>
              <span>2nd Prize</span>
              <span className="amount">₹4,000</span>
            </div>
            <div className="prize-item">
              <span className="emoji">🏆</span>
              <span>1st Prize</span>
              <span className="amount">₹7,000</span>
            </div>
            <div className="prize-item">
              <span className="emoji">🥉</span>
              <span>3rd Prize</span>
              <span className="amount">₹2,000</span>
            </div>
          </div>
        </div>

        <button
          className={`btn register-btn ${isLoading ? 'loading' : ''}`}
          onClick={handleRegisterClick}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin mr-2" size={20} />
              Redirecting...
            </>
          ) : (
            <>
              Register Here <img src={dark_arrow} alt="" />
            </>
          )}
        </button>
        {error && <p className="error-message mt-2 text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default Hero;
