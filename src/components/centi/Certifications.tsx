import React from "react";
import Points from "../mili/Points";
import { Palette } from "@mui/material/styles/createPalette"; // Add this line

interface CertificationsProps {
  showCertifications: boolean;
  toggleSection: (section: string) => void;
  theme: Palette;
}
const mainlink = "https://trelel129.github.io/CV-cert/certifications/";
const CertificationsData = [
  {
    content: "TOEFL ITP: 533",
    description:
      "Test of English as a Foreign Language Institutional Testing Program",
    date: new Date("2024-10-17"),
    link: new URL(mainlink + "FERRY%20NUR%20ALFIAN%20COA.jpg"),
  },
  {
    content: "MySkill Short Class: Data Formatting & Cleansing",
    description:
      "Short class Microsoft Excel on data formatting and cleansing by MySkill",
    date: new Date("2024-11-12"),
    link: new URL(
      mainlink +
        "Ferry%20Nur%20Alfian%20Eka%20Putra%20E-Certifikat%20SC%20Data%20Formatting%20%26%20Cleansing%20November%202024.pdf"
    ),
  },
  {
    content: "MySkill Short Class: Looker Data Studio",
    description:
      "Short class Data Science and Analysis Looker Data Studio by MySkill",
    date: new Date("2024-11-01"),
    link: new URL(
      mainlink +
        "Ferry%20Nur%20Alfian%20Eka%20Putra%20E-Sertif%20SC%20Looker%20Data%20Studio%20MySkill%20November%202024.pdf"
    ),
  },
];

const Certifications: React.FC<CertificationsProps> = ({
  showCertifications,
  toggleSection,
  theme,
}) => {
  return (
    <div className="mb-6">
      <h2
        className="text-2xl font-bold text-blue-500 mb-2 cursor-pointer"
        onClick={() => toggleSection("certifications")}
      >
        Certifications {showCertifications ? "-" : "+"}
      </h2>
      {showCertifications && (
        <div className="grid grid-cols-1 gap-4">
          {CertificationsData.map((cert, index) => (
            <Points
              key={index}
              content={cert.content}
              description={cert.description}
              theme={{
                borderColor: theme.divider,
                bgColor: theme.action.selected,
                hoverBgColor: theme.action.hover,
                textColor: theme.text.primary,
                subTextColor: theme.text.secondary,
              }}
              linked={true}
              link={cert.link}
              date={cert.date}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Certifications;
