import React from "react";
import Points from "../mili/Points";

interface ProjectsProps {
  showProjects: boolean;
  toggleSection: (section: string) => void;
}

const projectsData = [
  {
    content: "Personal Portfolio Website",
    description:
      "A responsive website showcasing my skills and projects using React and Tailwind CSS.",
  },
  {
    content: "A Module to Support Gamification",
    description:
      "A module to support gamification in a halal certification system developed using Node.js based on gamification principles.",
  },
];

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
        <div className="grid grid-cols-1 gap-4">
          {projectsData.map((project, index) => (
            <Points
              key={index}
              content={project.content}
              description={project.description}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
