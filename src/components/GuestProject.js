import React from "react";
import { useNavigate } from "react-router-dom";
import "./GuestProject.css";
// import AddPodcast from "./AddPodcast";

const GuestProject = () => {
  const navigate = useNavigate();

  const handleCreateProject = () => {
    navigate("/add-podcast");
  };

  // const handleCreateProject = () => {
  //   // Logic to create a new project
  //   navigate("/editor"); // Redirect to project editor
  // };

  return (
    <div className="guest-project-page">
      <div className="guest-project-container">
        <div className="header">
          <h1>Create a New Project</h1>
          <p className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="create-card" onClick={handleCreateProject}>
          <div className="plus-icon">+</div>
          <h2>Create New Project</h2>
        </div>
      </div>
    </div>
  );
};

export default GuestProject;
