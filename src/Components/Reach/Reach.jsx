import React, { useState } from 'react';
import './Reach.css';

const Reach = () => {
  const [isCollapsed, setIsCollapsed] = useState(true); // State to toggle collapse

  const reachData = [
    {
      question: "From Chennai Central",
      emoji: "🚉",
      answer:
        "Hire an auto/taxi.\nBoard 221 bus directly from Central to SSN.\nTake the metro from Central to Airport. (Refer below for Airport)",
    },
    {
      question: "From Egmore Station",
      emoji: "🚉",
      answer:
        "Hire an auto/taxi.\nCatch the 40603/40605 from Egmore to Tambaram and board 515 to reach SSN.",
    },
    {
      question: "From CMBT",
      emoji: "🚏",
      answer:
        "Board direct bus 570X from CMBT to SSN.\nTake the metro from CMBT to Airport (Refer below for directions from Airport).",
    },
    {
      question: "From Airport",
      emoji: "🛫",
      answer:
        "Walk to Tirusulam bus stop and board 70C or go to Tirusulam railway station and board 40601/404603/40605 to reach Tambaram and 515 from Tambaram to SSN.",
    },
  ];

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="reach-container" id="reach">
      <h2 onClick={toggleCollapse} className="reach-heading">
        Ways to Reach SSN
        <span className="toggle-icon">{isCollapsed ? "▼" : "▲"}</span>
      </h2>
      {!isCollapsed && ( // Show content only when not collapsed
        <div className="reach-content">
          {reachData.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3 className="faq-question">
                <span>{faq.emoji}</span>
                {faq.question}
              </h3>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reach;
