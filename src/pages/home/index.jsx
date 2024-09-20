import React from "react";
import "./styles.scss";
import { Animate } from "react-simple-animate";
import { Typewriter } from "react-simple-typewriter";
import { Motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <section id="home" className="home">
        <div className="home__text-wrapper">
          <div className="home__text-wrapper__name-and-bio">
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
              <h1 id="name">heyab woldegebriel</h1>
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
                is a <b>full stack developer</b> crafting digital solutions to
                real life problems.
              </h2>
            </Animate>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
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
            <div className="home__text-wrapper__additional-info">
              <div className="currently">
                <h3>currently</h3>
                <p>a software developer @ The Aerospace Corporation</p>
              </div>
              <div className="drivenBy">
                <h3>driven by</h3>
                <p>
                  human connection, storytelling, & technical innovation for
                  social good
                </p>
              </div>
            </div>
          </Animate>
        </div>
      </section>
      <section className="projects">
        <h1>Projects</h1>
      </section>
    </>
  );
};

export default Home;
