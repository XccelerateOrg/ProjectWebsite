import React from "react";
import { Link } from "react-router-dom";
function ProjectList(props) {
  function renderProjects() {
    return props.projects.map((project, index) => {
      return (
        <li key={project.id}>
          <br />
          <Link to={`/projects/${project.id}`}>
            {project.title}
          </Link>
        </li>
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
