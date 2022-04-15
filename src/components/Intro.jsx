import "./Intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, my name is</h2>
          <h1 className="i-name">Kevin Nguyen</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Software Developer</div>
              <div className="i-title-item">Physical Therapist</div>
              <div className="i-title-item">Problem Solver</div>
              <div className="i-title-item">Communicator</div>
            </div>
          </div>
          {/* <div className="i-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            dolorem libero aliquam consequatur maxime nam molestiae. Error
            ratione aut quae velit tenetur maiores distinctio blanditiis,
            ducimus quod iste similique totam.
          </div> */}
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img
          src="https://res.cloudinary.com/dqexqyy2j/image/upload/v1649958239/IMG_7284_vsuzhd-jpg_j8ndyv.jpg"
          alt="my-pic"
          className="i-img"
        />
      </div>
    </div>
  );
};

export default Intro;
