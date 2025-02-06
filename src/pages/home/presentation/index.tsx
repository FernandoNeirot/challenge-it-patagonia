import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhrasesSlider } from "../../../redux/sliders/phrases/get";
import useAuth from "../../../hooks/useAuth";
import Card from "./components/Card";
import { IPhrases } from "../../../shared/_architecture/domain/phrases.interfaces";
import { IStateRedux } from "../../../shared/_architecture/domain/state.interface";
import Loading from "../../../shared/components/form/loading";

const HomePage = () => {
  const dispatch = useDispatch<any>();
  // const user = useSelector((state: any) => state.user);
  const { userId } = useAuth();
  const phrasesData = useSelector((state: IStateRedux) => state.phrases) ?? null;
  
  useEffect(() => {
    dispatch(getPhrasesSlider({ id: userId }));
  }, [userId]);
  return (
    <div style={{
      minHeight: "calc(100vh - 100px)",
    }}>
      {
        phrasesData?.loading && <Loading />
      }
      {
        phrasesData?.error && <div className="text-red-600 w-full text-center text-[20px] mt-5">Hubo un error</div>
      }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {phrasesData?.data &&
          phrasesData?.data.map((phrase: IPhrases) => {
            return <Card key={phrase.id} createBy={"fer"} {...phrase} />;
          })}
      </div>
    </div>
  );
};

export default HomePage;
