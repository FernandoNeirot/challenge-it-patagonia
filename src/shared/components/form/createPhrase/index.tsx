import { useState } from "react";
import { createPhrases } from "../../../_architecture/application/createPhrases";
import { IPhrases } from "../../../_architecture/domain/phrases.interfaces";
import PortalToMain from "../../PortalToMain";
import ButtonComponent from "../button";

import Modal from "../modal";
import TextareaComponent from "../textarea";
import useAuth from "../../../../hooks/useAuth";
import Loading from "../loading";
import { useDispatch } from "react-redux";
import { getPhrasesSlider } from "../../../../redux/sliders/phrases/get";
import { changeModalCreatePhrases } from "../../../../redux/sliders/global";
import { AppDispatch } from "../../../../redux/store";

const CreatePhraseModal = () => {
  const dispatch = useDispatch<AppDispatch>();
  const{userId }=useAuth();
  const [phrase, setPhrase] = useState<string>("");
  const [loading, setLoading] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPhrase(e.target.value);
  };
  const handleClose = () => {
    dispatch(changeModalCreatePhrases());
  }
  const handleCreatePhrase = async() => {
    const request: IPhrases = {
      category: "general",
      description: phrase,
      userId: userId,
      created: new Date().toISOString(),
      deleted: false,
    };
    setLoading(true);
    const res = await createPhrases(request);
    setLoading(false);
    if (res) {
      alert("Frase creada");
      dispatch(getPhrasesSlider({ id: userId }));
      
    }else{
      alert("Error al crear frase");
    }
  };
  return (
    <PortalToMain>
      <>
      {
        loading && <Loading  />
      }
      <Modal title="Crear frase" close={handleClose}>
        <div className="">
          <TextareaComponent
            name="title"
            value={phrase}
            onChange={handleChange}
            placeholder="Ingrese Frase"
            />
          <ButtonComponent onClick={handleCreatePhrase} text="Crear" />
        </div>
      </Modal>
            </>
    </PortalToMain>
  );
};

export default CreatePhraseModal;
