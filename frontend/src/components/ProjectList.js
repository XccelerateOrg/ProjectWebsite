import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

/**********************************************
 * Project List Component
 * ==================================
 * This component accepts an array of objects, rendering out each object (including the navbar react link)
 * We gave it a function, and then rendered it inside the return block
 ***********************************************/
function ProjectList(props) {
  function renderProjects() {
    return props.projects.map((project, index) => {
      return (
        <div key={project.id}>
          <br />
          <ProjectCard
            title={project.title}
            description={project.description}
          />
          <Link to={`/projects/${project.id}`}>
            {project.title}
            <br />
          </Link>

          <ProjectCard />
          {project.description}
        </div>
      );
    });
  }
  return (
    <div>
      <h3>Project List</h3>
      {renderProjects()}
    </div>
  );
}

export default ProjectList;
