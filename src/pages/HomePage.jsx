import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="body">
      <div className="homepage-main">
        <div className="homepage-header">Enter into Student Info System</div>
        <div
          className="confirm-button"
          onClick={() => {
            navigate("/chatbot");
          }}
        >
          Enroll Now!
        </div>
      </div>
    </div>
  );
};

export default HomePage;
