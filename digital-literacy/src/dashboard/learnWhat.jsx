import React from "react";
import "./learnWhat.css";

// Import images properly from assets
import microsoft from "../assets/microsoft.png";
import ai from "../assets/ai.png";
import google from "../assets/google.png";

const LearnWhat = () => {
  const handleClick = (option) => {
    alert(`You chose to learn about: ${option}!`);
  };

  return (
    <div className="learn-container">
      <h1>What do you want to learn?</h1>
      <div className="learn-options">
        <div className="learn-option" onClick={() => handleClick("Microsoft Kit")}>
          <img src={microsoft} alt="Microsoft Kit" />
          <h2>Microsoft Kit</h2>
          <p>Word, Spreadsheets, Presentations</p>
        </div>
        <div className="learn-option" onClick={() => handleClick("AI Tools")}>
          <img src={ai} alt="AI Tools" />
          <h2>AI Tools</h2>
          <p>Prompt Engineering</p>
        </div>
        <div className="learn-option" onClick={() => handleClick("Mail & Meetings")}>
          <img src={google} alt="Mail & Meetings" />
          <h2>Mail & Meetings</h2>
          <p>Emails, Google Meet</p>
        </div>
      </div>
    </div>
  );
};

export default LearnWhat;
