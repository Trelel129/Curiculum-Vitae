import React from "react";
import Points from "../mili/Points";

interface SkillsProps {
  showSkills: boolean;
  toggleSection: (section: string) => void;
}

const skillsData = [
  { content: "HTML, CSS, Tailwind CSS" },
  { content: "JavaScript, TypeScript" },
  { content: "Ren.py" },
  { content: "Basic SQL" },
  { content: "Agile methodologies" },
  { content: "Git" },
];

const Skills: React.FC<SkillsProps> = ({ showSkills, toggleSection }) => {
  return (
    <div className="mb-6">
      <h2
        className="text-2xl font-bold text-blue-500 mb-2 cursor-pointer"
        onClick={() => toggleSection("skills")}
      >
        Skills {showSkills ? "-" : "+"}
      </h2>
      {showSkills && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skillsData.map((skill, index) => (
            <Points key={index} content={skill.content} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Skills;
