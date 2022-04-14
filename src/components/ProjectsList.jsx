import MediaCard from "./muiCard";
import "./ProjectsList.css";

const ProjectsList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1>Projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          assumenda earum, est nulla aliquid autem dolorum provident numquam ea
          officiis veritatis repellendus odio. Quos illo itaque modi in!
          Assumenda, saepe! hello
        </p>
      </div>
      <div className="pl-list">
        {/* <div className="p">
          <img
            src="https://res.cloudinary.com/dqexqyy2j/image/upload/v1649906116/logos/Project%20Screenshots/Screen_Shot_2022-04-13_at_10.12.13_PM_oqgvho.png"
            className="projectImage"
            alt="happycamperpic"
          />
        </div>
        <div className="p">
          <img
            src="https://res.cloudinary.com/dqexqyy2j/image/upload/v1649906116/logos/Project%20Screenshots/Screen_Shot_2022-04-13_at_10.14.31_PM_bwp6kn.png"
            className="projectImage"
            alt="toDoPic"
          />
        </div> */}
        <MediaCard />
      </div>
    </div>
  );
};

export default ProjectsList;
