import React, { useState, useEffect } from 'react';

const FlipNumber = ({ number }) => (
  <div className="flip-number">
    <div className="flip-card">
      {String(number).padStart(2, '0')}
    </div>
  </div>
);

const FlipUnit = ({ value, label }) => (
  <div className="flip-unit">
    <FlipNumber number={value} />
    <div className="flip-label">{label}</div>
  </div>
);

const FlipCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const eventDate = new Date('2025-02-19T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flip-countdown-container">
      <h2 className="flip-countdown-title">Event Starts In</h2>
      <div className="flip-countdown">
        <FlipUnit value={timeLeft.days} label="Days" />
        <FlipUnit value={timeLeft.hours} label="Hours" />
        <FlipUnit value={timeLeft.minutes} label="Minutes" />
        <FlipUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
};

export default FlipCountdown;