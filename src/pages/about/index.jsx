import React from "react";
import "./styles.scss";
import myPic from "../../static/images/myPic.png";
import Skills from "../../components/Skills";
import { Animate } from "react-simple-animate";

const About = () => {
  return (
    <div className="AboutMe">
      <Animate
        play
        duration={0.5}
        delay={0}
        start={{
          opacity: 0,
          transform: "translateY(10px)",
        }}
        end={{
          opacity: 1,
          transform: "translateY(0px)",
        }}
      >
        <section className="AboutMeIntro">
          <div className="AboutMeIntro__myPicDiv">
            <Animate
              play
              duration={0.5}
              delay={0}
              start={{
                opacity: 0,
                transform: "translateY(10px)",
              }}
              end={{
                opacity: 1,
                transform: "translateY(0px)",
              }}
            >
              <img className="AboutMeIntro__myPic" src={myPic} />
            </Animate>
          </div>
          <div className="AboutMeIntro__text-wrapper">
            <h1>a little more about me...</h1>
            <br />
            <br />
            <p>
              I graduated from <b>The University of California, Riverside</b>{" "}
              with a degree in{" "}
              <b>Computer Science with Business Applications</b> in June of
              2022. Donec sit amet velit lacus. Curabitur maximus, quam in
              molestie vestibulum, mauris diam eleifend diam, elementum sodales
              lectus turpis vitae mi. Mauris tincidunt elit et suscipit
              ultrices.
            </p>
            <br />
            <p>
              Sed ultrices mauris ligula, nec vehicula ante feugiat ac. Mauris
              magna tortor, bibendum id fermentum et, maximus at lacus.
              Pellentesque eu sollicitudin ligula. Suspendisse luctus egestas
              sem ac molestie. Duis faucibus turpis vel augue sagittis, sed
              imperdiet lorem feugiat. Mauris et justo at odio laoreet blandit
              euismod sit amet metus.
            </p>
          </div>
        </section>
        <section className="Skills">
          <Skills />
        </section>
        <section className="AboutMeFunStuff">
          <h1>the fun stuff!</h1>
          <br />
          <br />
          <p>
            Sed ultrices mauris ligula, nec vehicula ante feugiat ac. Mauris
            magna tortor, bibendum id fermentum et, maximus at lacus.
            Pellentesque eu sollicitudin ligula. Suspendisse luctus egestas sem
            ac molestie. Duis faucibus turpis vel augue sagittis, sed imperdiet
            lorem feugiat. Mauris et justo at odio laoreet blandit euismod sit
            amet metus.
          </p>{" "}
          <p>
            Sed ultrices mauris ligula, nec vehicula ante feugiat ac. Mauris
            magna tortor, bibendum id fermentum et, maximus at lacus.
            Pellentesque eu sollicitudin ligula. Suspendisse luctus egestas sem
            ac molestie. Duis faucibus turpis vel augue sagittis, sed imperdiet
            lorem feugiat. Mauris et justo at odio laoreet blandit euismod sit
            amet metus.
          </p>{" "}
          <p>
            Sed ultrices mauris ligula, nec vehicula ante feugiat ac. Mauris
            magna tortor, bibendum id fermentum et, maximus at lacus.
            Pellentesque eu sollicitudin ligula. Suspendisse luctus egestas sem
            ac molestie. Duis faucibus turpis vel augue sagittis, sed imperdiet
            lorem feugiat. Mauris et justo at odio laoreet blandit euismod sit
            amet metus.
          </p>{" "}
          <p>
            Sed ultrices mauris ligula, nec vehicula ante feugiat ac. Mauris
            magna tortor, bibendum id fermentum et, maximus at lacus.
            Pellentesque eu sollicitudin ligula. Suspendisse luctus egestas sem
            ac molestie. Duis faucibus turpis vel augue sagittis, sed imperdiet
            lorem feugiat. Mauris et justo at odio laoreet blandit euismod sit
            amet metus.
          </p>{" "}
          <p>
            Sed ultrices mauris ligula, nec vehicula ante feugiat ac. Mauris
            magna tortor, bibendum id fermentum et, maximus at lacus.
            Pellentesque eu sollicitudin ligula. Suspendisse luctus egestas sem
            ac molestie. Duis faucibus turpis vel augue sagittis, sed imperdiet
            lorem feugiat. Mauris et justo at odio laoreet blandit euismod sit
            amet metus.
          </p>
        </section>
      </Animate>
    </div>
  );
};

export default About;
