import "./About.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://res.cloudinary.com/dqexqyy2j/image/upload/v1649905560/logos/react-logo-1_oxctf3.png"
            alt="react-logo"
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">My Skills</h1>
        <p className="a-sub">
          <ul>
            <li>JavaScript</li>
          </ul>
        </p>
        <p className="a-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eaque
          sit nostrum, vero soluta corporis iste, eius vel temporibus dicta
          distinctio ipsum nihil eveniet doloremque pariatur ex labore deserunt
          aspernatur?
        </p>
      </div>
    </div>
  );
};

export default About;
