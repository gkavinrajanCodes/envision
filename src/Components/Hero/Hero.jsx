import React, { useState } from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
import { Loader2 } from 'lucide-react'; // This should now work
import CountdownClock from '../CountdownClock/CountdownClock';

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
      </div>
    </div>
  );
};

export default Hero;
