import React from "react";

interface ProjectsProps {
  showProjects: boolean;
  toggleSection: (section: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ showProjects, toggleSection }) => {
  return (
    <div className="mb-6">
      <h2
        className="text-2xl font-bold text-blue-500 mb-2 cursor-pointer"
        onClick={() => toggleSection("projects")}
      >
        Projects {showProjects ? "-" : "+"}
      </h2>
      {showProjects && (
        <div className="mb-4">
          <h3 className="font-bold text-gray-300">
            Personal Portfolio Website
          </h3>
          <p className="text-gray-400">
            A responsive website showcasing my skills and projects using React
            and Tailwind CSS.
          </p>
          <h3 className="font-bold text-gray-300">
            A Module to Support Gamification
          </h3>
          <p className="text-gray-400">
            A module to support gamification in a halal certification system
            developed using Node.js based on gamification principles.
          </p>
        </div>
      )}
    </div>
  );
};

export default Projects;
