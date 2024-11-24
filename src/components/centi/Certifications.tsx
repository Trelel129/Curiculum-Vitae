import React from "react";
import Points from "../mili/Points";

interface CertificationsProps {
  showCertifications: boolean;
  toggleSection: (section: string) => void;
}

const Certifications: React.FC<CertificationsProps> = ({
  showCertifications,
  toggleSection,
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
          />
        </div>
      )}
    </div>
  );
};

export default Certifications;
