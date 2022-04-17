import "./About.css";
import ImageCards from "./imageCards";

const About = () => {
  return (
    <div className="a" id="about-section">
      <h1 className="a-title">My Skills</h1>
      <div className="imageList">
        <ImageCards />
      </div>
    </div>
  );
};

export default About;
