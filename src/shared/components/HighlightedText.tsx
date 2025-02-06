import { useSelector } from "react-redux";
import { IStateRedux } from "../_architecture/domain/state.interface";

interface HighlightedTextProps {
  text: string;
}

const HighlightedText = ({ text }: HighlightedTextProps) => {
  const { search } = useSelector((state: IStateRedux) => state.global);
  if (!search.trim()) {
    return <span>{text}</span>;
  }

  const regex = new RegExp(`(${search})`, "gi");
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <span key={index} className="bg-blue-200 text-blue-900">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  );
};

export default HighlightedText;
