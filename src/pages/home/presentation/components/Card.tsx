interface CardProps {
  description: string;
  createBy: string;
  created: string;
}
const Card = ({ description, createBy, created }: CardProps) => {
  return (
    <div className="bg-blue-900 p-4  flex flex-col justify-between rounded-md">
      <div className="h-[150px] overflow-y-auto border border-blue-950" style={{
        scrollbarColor: '#0010ef #000108',
        scrollbarWidth: 'thin'
      }}>
        {description}
      </div>
      <div className="mt-4">
        <div>Creado por: {createBy}</div>
        <div>Fecha:{created}</div>
      </div>
    </div>
  );
};

export default Card;
