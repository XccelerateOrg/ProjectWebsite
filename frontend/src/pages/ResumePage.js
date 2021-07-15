import React, { useState } from "react";
import { resumes } from "../dummyData/resumes";
import Accordion from "../components/Accordion";

function ResumePage() {
  // #TODO: Use effect that will grab redux thunk, and then render out education, job and certification (in our service class, we have to make sure that we also have our specific fetch methods for the type)
  const job = resumes.filter(
    (resume) => resume.type === "Job"
  );
  const education = resumes.filter(
    (resume) => resume.type === "Education"
  );
  const certification = resumes.filter(
    (resume) => resume.type === "Certification"
  );
  return (
    <div>
      <h1>Resume Page</h1>
      <hr />
      <h1>Jobs</h1>
      <Accordion resumes={job} />
      <hr />
      <h1>Education</h1>
      <Accordion resumes={education} />
      <hr />
      <h1>Certification</h1>
      <Accordion resumes={certification} />
    </div>
  );
}

export default ResumePage;
