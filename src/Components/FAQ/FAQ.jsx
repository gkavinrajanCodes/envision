import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  const faqData = [
    {
      question: "Rules",
      answer:
        "During registration, participants must indicate their order of preference for roles (Strategist, Developer, Designer).\nRoles will be allotted based on availability, and once confirmed, they cannot be changed.\nPlease note that there are limited slots available for participation.\nNo refunds will be provided under any circumstances.",
    },
    {
      question: "Team Composition",
      answer:
        "Each team will consist of one Strategist, two Developers, and one Designer. Teams will be finalized at the start of the event. Once formed, changes to team composition are not allowed.",
    },
    {
      question: "Problem Statements",
      answer: "Problem statements will be announced after the teams are formed. Once a problem statement is selected by a team, it cannot be changed after 12:00 PM on Day 1.",
    },
    {
      question: "Project Scope",
      answer: "Teams are required to ideate on a complete product, but for demonstration purposes, only the Minimum Viable Product (MVP) with core functionality is mandatory.\nAdditional features and future plans can be showcased through a PPT or visual mock-ups",
    },
    {
      question: "Judging Process",
      answer: "The jury will conduct an initial review of all projects during the first session on Day 2.\nThe final judging and evaluations will take place in the afternoon of Day 2.",
    },
    {
      question: "Technical Requirements",
      answer: "All participants are required to bring their laptops, fully charged, along with necessary adapters and extension cords.",
    },
    {
      question: "Other Important Rules",
      answer: "Team members are expected to collaborate and adhere to time constraints.\nProblem statements must align with the guidelines provided during the event briefing.\nTeams must be prepared to present their MVP and any additional materials (PPT/mock-ups) within the allocated pitch time.\nBy adhering to these guidelines, participants can focus on innovation and collaboration while creating impactful solutions.",
    },
  ];

  return (
    <div className="faq-container" id = 'faq'>
      <button
        className="faq-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Guidelines</span>
        <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>

      {isOpen && (
        <div className="faq-content">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3 className="faq-question">
                <span>📘</span>
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

export default FAQ;
