import './FAQ.css';

const FAQ = () => {
  const rulesData = {
    question: "Rules",
    emoji: "📜",
    answer:
      "Participants will register as individuals and form teams during the hackathon.\nPlease note that there are limited slots available for participation.\nNo refunds will be provided under any circumstances.\nParticipants will be allowed to form teams at the start of the event during a short networking session. Once formed, changes to team composition are not allowed.",
  };

  const cardData = [
    {
      question: "Problem Statements",
      emoji: "❓",
      answer: "Problem statements will be announced after the teams are formed. Once a problem statement is selected by a team, it cannot be changed after 12:00 PM on Day 1.",
    },
    {
      question: "Project Scope",
      emoji: "📊",
      answer: "Teams are required to ideate on a complete product, but for demonstration purposes, only the Minimum Viable Product (MVP) with core functionality is mandatory.\nAdditional features and future plans can be showcased through a PPT or visual mock-ups",
    },
    {
      question: "Judging Process",
      emoji: "⚖️",
      answer: "The mentors will conduct several reviews of all projects during the 24 hours.\nThe final judging and evaluations will take place at the end of 24 hours.",
    },
  ];

  const additionalRulesData = [
    {
      question: "Technical Requirements",
      emoji: "💻",
      answer: "All participants are required to bring their laptops, fully charged, along with necessary adapters and extension cords.",
    },
    {
      question: "Other Important Rules",
      emoji: "📌",
      answer: "Team members are expected to collaborate and adhere to time constraints.\nProblem statements must align with the guidelines provided during the event briefing.\nTeams must be prepared to present their MVP and any additional materials (PPT/mock-ups) within the allocated pitch time.\nBy adhering to these guidelines, participants can focus on innovation and collaboration while creating impactful solutions.",
    },
  ];

  return (
    <div className="faq-container" id="faq">
      <div className="faq-content">
        {/* Rules Section */}
        <div className="faq-card">
          <h3 className="faq-card-question">
            {rulesData.question}
          </h3>
          <p className="faq-card-answer">{rulesData.answer}</p>
        </div>

        {/* Card Section - Flex Layout */}
        <div className="faq-cards-container">
          {cardData.map((card, index) => (
            <div key={index} className="faq-card">
              <h3 className="faq-card-question">
                {card.question}
              </h3>
              <p className="faq-card-answer">{card.answer}</p>
            </div>
          ))}
        </div>

        {/* Additional Rules Section */}
        {additionalRulesData.map((faq, index) => (
          <div key={index} className="faq-card">
            <h3 className="faq-card-question">
              {faq.question}
            </h3>
            <p className="faq-card-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
