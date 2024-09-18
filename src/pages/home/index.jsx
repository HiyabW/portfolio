import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactPage = () => {
    navigate("/content");
  };

  const handleNavigateToPortfolioPage = () => {
    navigate("/portfolio");
  };

  const handleNavigateToLinkedIn = () => {
    window.location.href = "https://www.linkedin.com/in/hiyab-woldegebriel-119009178/"
  };

  const handleNavigateToGithub = () => {
    window.location.href = "https://github.com/HiyabW"
  };
  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <Animate
          play
          duration={0.5}
          delay={0}
          start={{
            opacity: 0,
            transform: "translateY(20px)",
          }}
          end={{
            opacity: 1,
            transform: "translateY(0px)",
          }}
        >
          <h1 id="name">hi, i'm heyab!</h1>
        </Animate>

        <Animate
          play
          duration={0.5}
          delay={1}
          start={{
            opacity: 0,
          }}
          end={{
            opacity: 1,
          }}
        >
          <h2 id="description">
            aspiring{" "}
            <span>
              <Typewriter
                cursor
                loop={false}
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                words={[
                  "frontend developer",
                  "backend developer",
                  "creative",
                  "collaborator",
                ]}
              />
            </span>
          </h2>
        </Animate>
      </div>
      <Animate
        play
        duration={0.5}
        delay={2}
        start={{
          opacity: 0,
          transform: "translateY(20px)",
        }}
        end={{
          opacity: 1,
          transform: "translateY(0px)",
        }}
      >
        <div className="home__buttons">
          <button id="hireMe" onClick={handleNavigateToContactPage}>
            Hire Me
          </button>
          <button id="viewMyWork" onClick={handleNavigateToPortfolioPage}>
            View my Work
          </button>
        </div>
        <div className="home__contactIcons">
          <FaLinkedin
            size={60}
            className="home__contactIcons-icon"
            onClick={handleNavigateToLinkedIn}
          />
          <FaGithub
            size={60}
            className="home__contactIcons-icon"
            onClick={handleNavigateToGithub}
          />
          <FaEnvelope size={60} className="home__contactIcons-icon" />
          <FaPhone size={60} className="home__contactIcons-icon" />
        </div>
      </Animate>
    </section>
  );
};

export default Home;
