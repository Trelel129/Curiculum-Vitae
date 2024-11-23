import React from "react";

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
        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li>AWS Certified Developer - Associate</li>
          <li>Certified Scrum Master</li>
        </ul>
      )}
    </div>
  );
};

export default Certifications;
