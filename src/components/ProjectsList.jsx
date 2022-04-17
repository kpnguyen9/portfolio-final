import MediaCard from "./muiCard";
import "./ProjectsList.css";
import myProjects from "../data/db.json";

const ProjectsList = () => {
  const Projects = myProjects.projects;
  return (
    <div className="pl" id="projects-section">
      <div className="pl-texts">
        <h1>Projects</h1>
      </div>
      <div className="pl-list">
        {Projects.map((Project) => (
          <MediaCard
            imageURL={Project.imageURL}
            title={Project.title}
            body={Project.body}
            usedLanguages={Project.used}
            gitURL={Project.gitHubURL}
            appURL={Project.appURL}
            key={Project.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
