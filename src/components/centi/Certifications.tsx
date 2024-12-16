import React from "react";
import Points from "../mili/Points";
import { Palette } from "@mui/material/styles/createPalette"; // Add this line

interface CertificationsProps {
  showCertifications: boolean;
  toggleSection: (section: string) => void;
  theme: Palette;
}

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
          <Points
            content="Not Available Yet"
            description="I am still working on getting certifications."
            theme={{
              borderColor: theme.divider,
              bgColor: theme.background.paper,
              hoverBgColor: theme.action.hover,
              textColor: theme.text.primary,
              subTextColor: theme.text.secondary,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Certifications;
