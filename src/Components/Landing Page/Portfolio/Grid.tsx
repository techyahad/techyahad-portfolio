
// Define the props interface
interface GridProps {
  image: string;
}

// Use the GridProps interface with React.FC
const Grid: React.FC<GridProps> = ({ image }) => {
  return (
    <div className="relative group">
      <img
        className="h-auto max-w-full rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105"
        src={image}
        alt="Grid image"
      />
    </div>
  );
};

export default Grid;
