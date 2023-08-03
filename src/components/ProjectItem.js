import React from "react";
const ProjectItem = ({ technologies }) => {
  return (
    <div>
      <h1>MY projects</h1>
      <h3>Project Title</h3>
      <p>Technologies:</p>
      {technologies.map((technology, index) => (
        <span key={index}>{technology}</span>
      ))}
    </div>
  );
};

export default ProjectItem;
