import React, { useEffect } from "react";
import { projects } from "../dummyData/projects";


export default function EachProjectPage(props) {
  // #TODO: how do we loop through the array of objects, grabbing the correct
  // knex query to grab the correct project

  useEffect(() => {
    // grab data from the passed in id
  }, []);
  return (
    <div>
      <h1>Each Project Page</h1>
      <p>Current id: {props.match.params.id - 1}</p>
      {projects[props.match.params.id - 1].title}
    </div>
  );
}
