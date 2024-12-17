import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

interface PointsProps {
  content: string;
  linked?: boolean;
  link?: URL;
  description?: string;
  date?: Date;
  theme: {
    borderColor: string;
    bgColor: string;
    hoverBgColor: string;
    textColor: string;
    subTextColor: string;
  };
}

const Points: React.FC<PointsProps> = ({
  content,
  description,
  theme,
  linked,
  link,
  date,
}) => {
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
      {date && (
        <p style={{ color: theme.subTextColor }}>
          {date?.toISOString().substr(0, 10)}
        </p>
      )}
      {linked && (
        <Link href={link?.toString() || ""}>
          <SearchIcon />
        </Link>
      )}
    </div>
  );
};

export default Points;
