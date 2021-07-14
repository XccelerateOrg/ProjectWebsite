import React, { useState } from "react";
import { resumes } from "../dummyData/resumes";
import Accordion from "../components/Accordion";

function ResumePage() {
  const [certifications, setCertificationsList] = useState(
    []
  );
  const [education, setEducationList] = useState([]);
  const [jobs, setJobsList] = useState([]);

  // #TODO: Use effect that will grab redux thunk, and then render out education, job and certification (in our service class, we have to make sure that we also have our specific fetch methods for the type)
  return (
    <div>
      <h1>Resume Page</h1>
      <hr />
      <h1>Jobs</h1>
      <Accordion resumes={resumes} />
      <hr />
      <h1>Education</h1>
      <Accordion resumes={resumes} />
      <hr />
      <h1>Certification</h1>
      <Accordion resumes={resumes} />
    </div>
  );
}

export default ResumePage;
