import React from "react";
import "./styles.scss";
import myPic from '../../static/images/myPic.png'

const About = () => {
  return (
    <section className="AboutMe">
      <div className="AboutMe__myPicDiv">
        <img className="AboutMe__myPic" src={myPic} />
      </div>
      <div className="AboutMe__text-wrapper">
        <h1>a little more about me...</h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          volutpat arcu massa, vitae volutpat ipsum elementum ut. Donec sit amet
          velit lacus. Curabitur maximus, quam in molestie vestibulum, mauris
          diam eleifend diam, elementum sodales lectus turpis vitae mi. Mauris
          tincidunt elit et suscipit ultrices. Sed ultrices mauris ligula, nec
          vehicula ante feugiat ac. Mauris magna tortor, bibendum id fermentum
          et, maximus at lacus. Pellentesque eu sollicitudin ligula. Suspendisse
          luctus egestas sem ac molestie. Duis faucibus turpis vel augue
          sagittis, sed imperdiet lorem feugiat. Mauris et justo at odio laoreet
          blandit euismod sit amet metus. Fusce auctor pulvinar massa. Integer
          quam nunc, ornare a velit eget, suscipit suscipit neque. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Fusce sagittis egestas tellus sed rutrum. Donec ac libero
          gravida, fringilla tortor sed, volutpat purus. Nam velit libero,
          varius ac lacinia ac, dapibus eget nibh. Pellentesque a finibus diam,
          sit amet gravida est. Suspendisse eu lorem nibh. Maecenas ultrices
          magna ac eros eleifend pretium. Nam vel orci quis velit dignissim
          euismod quis sit amet felis.
        </p>
      </div>
    </section>
  );
};

export default About;
