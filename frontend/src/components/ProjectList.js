import React from "react";
import { Link } from "react-router-dom";

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
