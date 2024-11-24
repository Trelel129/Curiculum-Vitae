interface PointsProps {
  content: string;
  description?: string;
}

const Points: React.FC<PointsProps> = ({ content, description }) => {
  return (
    <div className="border border-gray-700 rounded-lg p-4 bg-gray-800 hover:bg-gray-600 transition duration-200">
      <h3 className="font-bold text-gray-300">{content}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};
export default Points;
