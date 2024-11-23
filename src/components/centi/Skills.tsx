import React from "react";

interface SkillsProps {
  showSkills: boolean;
  toggleSection: (section: string) => void;
}

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
        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li>JavaScript, TypeScript, React, Node.js</li>
          <li>HTML, CSS, Tailwind CSS</li>
          <li>Ren.py</li>
          <li>Basic SQL</li>
          <li>Agile methodologies</li>
          <li>Git</li>
        </ul>
      )}
    </div>
  );
};

export default Skills;
