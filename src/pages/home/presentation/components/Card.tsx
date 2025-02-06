import moment from "moment";
import useAuth from "../../../../hooks/useAuth";
import HighlightedText from "../../../../shared/components/HighlightedText";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AppDispatch } from "../../../../redux/store";
import { useDispatch } from "react-redux";
import { changeModalCreatePhrases, changePhraseSelected } from "../../../../redux/sliders/global";
import { IPhrases } from "../../../../shared/_architecture/domain/phrases.interfaces";


const Card = (phrase: IPhrases) => {
  const dispatch = useDispatch<AppDispatch>();
  const { userName } = useAuth();

  const handleEdit = () => {
    dispatch(changePhraseSelected(phrase))
    dispatch(changeModalCreatePhrases())
  }
  return (
    <div className="bg-blue-900 p-4  flex flex-col justify-between rounded-md">
      <div
        className="p-2 h-[150px] overflow-y-auto border border-blue-950"
        style={{
          scrollbarColor: "#0010ef #000108",
          scrollbarWidth: "thin",
        }}
      >
        <HighlightedText text={phrase.description} />
      </div>
      <div className="flex justify-between items-center">
        <div className="mt-4">
          <div>
            Creado por:<span className="text-blue-300"> {userName}</span>
          </div>
          <div>
            Fecha:{" "}
            <span className="text-blue-300">
              {" "}
              {moment(phrase.created).format("DD-MM-YY hh:mm:ss")}
            </span>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <AiOutlineEdit size={25} className="text-green-500" onClick={handleEdit}/>
          <RiDeleteBin5Line size={25} className="text-red-500 ml-10"/>
        </div>
      </div>
    </div>
  );
};

export default Card;
