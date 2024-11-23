interface TitleNameProps {
  personName: string;
}

const TitleName: React.FC<TitleNameProps> = ({ personName }) => {
  return (
    <h1 className="text-4xl font-bold text-green-400 mb-4">{personName}</h1>
  );
};
export default TitleName;
