import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactPage = () => {
    navigate("/content");
  };
  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1 id="name">
          hi, i'm heyab!
         </h1>
         <h1 id="description">
          full stack developer
        </h1>
      </div>
      <Animate 
      play
      duration={0.5}
      delay={2}
      start={{
        opacity: 0,
        transform: 'translateY(20px)'
      }}
      end={{
        opacity: 1,
        transform: 'translateY(0px)'
      }}>
        <div className="home__contacy-me">
          <button onClick={handleNavigateToContactPage}>Hire Me</button>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
