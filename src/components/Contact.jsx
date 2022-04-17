import "./Contact.css";
import Pdf from "../resume/KN-Resume.pdf";

const Contact = () => {
  return (
    <div className="c" id="contact-section">
      <div className="c-wrapper">
        <h1 className="c-title">Let's Work Together!</h1>
      </div>
      <div className="c-info">
        <div className="icon-links">
          <div className="icon">
            <a href="https://www.linkedin.com/in/kpnguyen9/" target="blank">
              <img
                src="https://res.cloudinary.com/dqexqyy2j/image/upload/c_scale,w_64/v1650138207/logos/linkedin_rsuroz.png"
                alt="linkedInIcon"
              />
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/kpnguyen9" target="blank">
              <img
                src="https://res.cloudinary.com/dqexqyy2j/image/upload/c_scale,w_64/v1650122075/logos/github_m1dgg1.png"
                alt="gitHubIcon"
              />
            </a>
          </div>
        </div>
        <h2>Email: kpnguyen2@gmail.com</h2>
        <a href={Pdf} target="blank" className="resumeLink">
          Resume
        </a>
      </div>
    </div>
  );
};

export default Contact;
