// components/Cv.tsx
"use client"; // Add this line at the top to mark this component as a client component

import React, { useState } from "react";
import TitleName from "../mili/titleName";
import Education from "../centi/Educations";
import Skills from "../centi/Skills";
import Certifications from "../centi/Certifications";
import Projects from "../centi/Projects";
import { Container, Paper, Typography, Button } from "@mui/material";
import { grey } from "@mui/material/colors";

const CV: React.FC = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showMore, setShowMore] = useState(false); // State for toggling additional content

  const toggleSection = (section: string) => {
    if (section === "skills") setShowSkills(!showSkills);
    if (section === "certifications")
      setShowCertifications(!showCertifications);
    if (section === "projects") setShowProjects(!showProjects);
  };

  const toggleMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <Container
        maxWidth="md"
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          minHeight: "100vh",
          py: 4,
        }}
      >
        <Paper elevation={3} sx={{ p: 4, mb: 4, bgcolor: grey[900] }}>
          <TitleName>Ferry Nur Alfian Eka Putra</TitleName>
          <Typography variant="body1" color="white">
            A highly motivated with a passion for web development and design.
          </Typography>

          <Education />
          <Skills showSkills={showSkills} toggleSection={toggleSection} />
          <Certifications
            showCertifications={showCertifications}
            toggleSection={toggleSection}
          />
          <Projects showProjects={showProjects} toggleSection={toggleSection} />
        </Paper>
        <Paper elevation={3} sx={{ p: 4, bgcolor: grey[700] }}>
          <TitleName>Ferry Nur Alfian Eka Putra</TitleName>
          <Button
            variant="contained"
            color="primary"
            onClick={toggleMore}
            sx={{ mt: 2 }}
          >
            {showMore ? "Show Less" : "Show More"}
          </Button>
          {showMore && (
            <Typography variant="body2" sx={{ mt: 2 }}>
              Additional content goes here. You can add more details about the
              person, projects, or any other relevant information.
            </Typography>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default CV;
