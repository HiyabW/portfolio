import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import React from "react";
import { useNavigate } from "react-router-dom";
import './styles.scss'

const ContactIcons = () => {
    const navigate = useNavigate();

    const handleNavigateToContactPage = () => {
      navigate("/content");
    };
  
    const handleNavigateToPortfolioPage = () => {
      navigate("/portfolio");
    };
  
    const handleNavigateToLinkedIn = () => {
      window.location.href =
        "https://www.linkedin.com/in/hiyab-woldegebriel-119009178/";
    };
  
    const handleNavigateToGithub = () => {
      window.location.href = "https://github.com/HiyabW";
    };

    return (
        <div className="contactIcons">
            <ul className="contactIcons__list">
              <li>
                <FaLinkedin
                  size={30}
                  className="contactIcons__list-icon"
                  onClick={handleNavigateToLinkedIn}
                />
              </li>
              <li>
                <FaGithub
                  size={30}
                  className="contactIcons__list-icon"
                  onClick={handleNavigateToGithub}
                />
              </li>
              <li>
                <FaEnvelope
                  size={30}
                  className="contactIcons__list-icon"
                />
              </li>
              <li>
                <FaPhone size={30} className="contactIcons__list-icon" />
              </li>
            </ul>
          </div>
    )
}

export default ContactIcons