import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Input } from "@nextui-org/input";
import CircularProgressBar from "./components/circularProgressBar";
import "./styles.scss";

const Skills = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const mySkills = [
    {
      name: "Javascript",
      level: 90,
    },
    {
      name: "React",
      level: 80,
    },
    {
      name: "HTML",
      level: 75,
    },
    {
      name: "CSS",
      level: 70,
    },
    {
      name: "SQL",
      level: 80,
    },
    {
      name: "Python",
      level: 60,
    },
  ];

  return (
    <Carousel responsive={responsive} infinite={true} className="skillSlider">
      {mySkills.map((skill) => {
        return (
          <div className="skillItem">
            <CircularProgressBar percentage={skill.level} />
            <br />
            <h2>{skill.name}</h2>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Skills;
