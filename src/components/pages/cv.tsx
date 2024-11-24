// components/Cv.tsx
"use client"; // Add this line at the top to mark this component as a client component

import React, { useState } from "react";
import TitleName from "../mili/titleName";
import Education from "../centi/Educations";
import Skills from "../centi/Skills";
import Certifications from "../centi/Certifications";
import Projects from "../centi/Projects";

const CV: React.FC = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const toggleSection = (section: string) => {
    if (section === "skills") setShowSkills(!showSkills);
    if (section === "certifications")
      setShowCertifications(!showCertifications);
    if (section === "projects") setShowProjects(!showProjects);
  };

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen flex flex-col items-center p-10">
      <div className="w-7/12 bg-gray-800 rounded-lg shadow-lg p-8">
        <TitleName>Ferry Nur Alfian Eka Putra</TitleName>
        <p className="text-lg mb-6">
          A highly motivated with a passion for web development and design.
        </p>

        <Education />
        <Skills showSkills={showSkills} toggleSection={toggleSection} />
        <Certifications
          showCertifications={showCertifications}
          toggleSection={toggleSection}
        />
        <Projects showProjects={showProjects} toggleSection={toggleSection} />
      </div>
    </div>
  );
};

export default CV;
