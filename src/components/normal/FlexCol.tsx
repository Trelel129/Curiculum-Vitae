interface FlexColProps {
  children: React.ReactNode;
}

const FlexCol: React.FC<FlexColProps> = ({ children }) => {
  return (
    <div className="h-auto flex flex-col items-center p-10">{children}</div>
  );
};
export default FlexCol;
