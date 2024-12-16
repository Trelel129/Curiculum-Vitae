interface PointsProps {
  content: string;
  description?: string;
  theme: {
    borderColor: string;
    bgColor: string;
    hoverBgColor: string;
    textColor: string;
    subTextColor: string;
  };
}

const Points: React.FC<PointsProps> = ({ content, description, theme }) => {
  return (
    <div
      style={{
        border: `1px solid ${theme.borderColor}`,
        backgroundColor: theme.bgColor,
        transition: "background-color 0.2s",
      }}
      className="rounded-lg p-4 hover:bg-opacity-75"
    >
      <h3 style={{ color: theme.textColor }} className="font-bold">
        {content}
      </h3>
      <p style={{ color: theme.subTextColor }}>{description}</p>
    </div>
  );
};

export default Points;
