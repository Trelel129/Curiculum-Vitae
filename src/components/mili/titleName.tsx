interface TitleNameProps {
  children: React.ReactNode;
}

const TitleName: React.FC<TitleNameProps> = ({ children }) => {
  return <h1 className="text-4xl font-bold text-green-400 mb-4">{children}</h1>;
};
export default TitleName;
