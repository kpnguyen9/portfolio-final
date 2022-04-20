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
          <div className="i-description">
            <p>
              I am seeking a full time position as a full-stack web devloper. I
              really enjoy utilizing and honing my skills with building
              databases, fetching data, algorithms, and design.
            </p>
            <p>
              Prior to my pursuit of a career as a developer, I worked as a
              Physical Therapist. It is another passion of mine as I was able to
              work together with patients as a team to relieve their pain and
              return to doing things they did prior to injury. Educating
              patients was another focal point during their treatment.
            </p>
            <p>
              In my free time, I enjoy traveling, trying new foods, spending
              time with my wife and 2 dogs. In addition, I recently picked up
              playing golf for the first time! It's challenging, but can also be
              very rewarding as I put in the time for it.
            </p>
          </div>
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
