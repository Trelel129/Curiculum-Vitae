// components/Cv.tsx
"use client"; // Add this line at the top to mark this component as a client component

import React, { useState, createContext } from "react";
import TitleName from "../mili/titleName";
import Education from "../centi/Educations";
import Skills from "../centi/Skills";
import Certifications from "../centi/Certifications";
import Projects from "../centi/Projects";
import { Container, Paper, Typography, Button } from "@mui/material";
import { themes, ThemeKey } from "../../themes";
import { ThemeProvider } from "@mui/material/styles";

export const ThemeContext = createContext<ThemeKey>("dark");

const CV: React.FC = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  // const [showMore, setShowMore] = useState(false); // State for toggling additional content
  const [theme, setTheme] = useState<ThemeKey>("dark");

  const toggleSection = (section: string) => {
    if (section === "skills") setShowSkills(!showSkills);
    if (section === "certifications")
      setShowCertifications(!showCertifications);
    if (section === "projects") setShowProjects(!showProjects);
  };

  // const toggleMore = () => {
  //   setShowMore(!showMore);
  // };

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as ThemeKey);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeProvider theme={themes[theme]}>
        <div
          style={{
            backgroundColor: themes[theme].palette.background.default,
            color: themes[theme].palette.text.primary,
            minHeight: "100vh",
          }}
        >
          <Container
            maxWidth="md"
            sx={{
              bgcolor: themes[theme].palette.background.default,
              color: "text.primary",
              py: 4,
            }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 4,
                mb: 4,
                bgcolor: themes[theme].palette.background.default,
                color: themes[theme].palette.text.primary,
              }}
            >
              <TitleName>Ferry Nur Alfian Eka Putra</TitleName>
              <Typography variant="body1">
                A highly motivated with a passion for web development and
                design.
              </Typography>

              <Education />
              <Skills
                showSkills={showSkills}
                toggleSection={toggleSection}
                theme={themes[theme].palette}
              />
              <Certifications
                showCertifications={showCertifications}
                toggleSection={toggleSection}
                theme={themes[theme].palette}
              />
              <Projects
                showProjects={showProjects}
                toggleSection={toggleSection}
                theme={themes[theme].palette}
              />
            </Paper>
            {/* <Paper
              elevation={3}
              sx={{
                p: 4,
                bgcolor: themes[theme].palette.background.default,
                color: themes[theme].palette.text.primary,
              }}
            >
              <TitleName>Ferry Nur Alfian Eka Putra</TitleName>
              <Button
                variant="contained"
                color={"primary"}
                onClick={toggleMore}
                sx={{ mt: 2 }}
              >
                {showMore ? "Show Less" : "Show More"}
              </Button>
              {showMore && (
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Additional content goes here. You can add more details about
                  the person, projects, or any other relevant information.
                </Typography>
              )}
            </Paper> */}
            <div style={{ position: "absolute", top: "16px", right: "16px" }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Theme Provider
              </Typography>
              <select
                value={theme}
                onChange={handleThemeChange}
                style={{
                  backgroundColor: themes[theme].palette.background.default,
                  color: themes[theme].palette.text.primary,
                  border: `1px solid ${themes[theme].palette.divider}`,
                  padding: "8px",
                  borderRadius: "4px",
                }}
              >
                <option value="dark">Dark</option>
                <option value="light">Light</option>
                <option value="blue">Blue</option>
              </select>
            </div>
          </Container>
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default CV;
