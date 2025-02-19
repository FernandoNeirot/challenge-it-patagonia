
interface ButtonProps {
  text: string;
  onClick: () => void;
  isLoading?: boolean;
  background?: string;
  className?: string;
}

const ButtonComponent = ({ text, onClick,background="bg-blue-500",className }: ButtonProps) => {
  return (
    <button
      className={`${background} text-white font-bold py-1 px-4 rounded-lg cursor-pointer ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
