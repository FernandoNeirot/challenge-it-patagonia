import moment from "moment";
import useAuth from "../../../../hooks/useAuth";

interface CardProps {
  description: string;
  created: string;
}
const Card = ({ description, created }: CardProps) => {
  const { userName } = useAuth();
  return (
    <div className="bg-blue-900 p-4  flex flex-col justify-between rounded-md">
      <div
        className="p-2 h-[150px] overflow-y-auto border border-blue-950"
        style={{
          scrollbarColor: "#0010ef #000108",
          scrollbarWidth: "thin",
        }}
      >
        {description}
      </div>
      <div className="mt-4">
        <div>
          Creado por:<span className="text-blue-300"> {userName}</span>
        </div>
        <div>
          Fecha: <span className="text-blue-300"> {moment(created).format("DD-MM-YY hh:mm:ss")}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
