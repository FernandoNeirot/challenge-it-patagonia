import { useEffect, useState } from "react";
import { createPhrases } from "../../../_architecture/application/createPhrases";
import { IPhrases } from "../../../_architecture/domain/phrases.interfaces";
import PortalToMain from "../../PortalToMain";
import ButtonComponent from "../button";

import Modal from "../modal";
import TextareaComponent from "../textarea";
import useAuth from "../../../../hooks/useAuth";
import Loading from "../loading";
import { useDispatch, useSelector } from "react-redux";
import { getPhrasesSlider } from "../../../../redux/sliders/phrases/get";
import { changeModalCreatePhrases } from "../../../../redux/sliders/global";
import { AppDispatch } from "../../../../redux/store";
import { IStateRedux } from "../../../_architecture/domain/state.interface";
import { updatePhrases } from "../../../_architecture/application/updatePhrases";

const CreateEditPhraseModal = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { userId } = useAuth();
  const [phrase, setPhrase] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const phraseSelected = useSelector(
    (state: IStateRedux) => state.global.phraseSelected
  );
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPhrase(e.target.value);
  };
  const handleClose = () => {
    dispatch(changeModalCreatePhrases());
  };
  const handlePhrase = async () => {
    const request: IPhrases = {
      id: phraseSelected ? phraseSelected.id : "",
      category: phraseSelected ? phraseSelected.category : "general",
      description: phrase,
      userId: phraseSelected ? phraseSelected.userId : userId,
      created: phraseSelected
        ? phraseSelected.created
        : new Date().toISOString(),
      deleted: phraseSelected ? phraseSelected.deleted : false,
    };
    setLoading(true);
    let res: boolean = false;
    if (phraseSelected) res = await updatePhrases(request);
    else res = await createPhrases(request);
    setLoading(false);
    if (res) {
      // vuelvo a pedir toda la data
      dispatch(getPhrasesSlider({ id: userId }));
      alert(`Frase ${phraseSelected?"actualizada":"creada"}`);
      dispatch(changeModalCreatePhrases());
    } else {
      alert("Error");
    }
  };

  useEffect(() => {
    if (phraseSelected) {
      setPhrase(phraseSelected.description);
    }
  }, [phraseSelected]);

  return (
    <PortalToMain>
      <>
        {loading && <Loading />}
        <Modal title={`${phraseSelected?"Editar":"Crear"} frase`} close={handleClose}>
          <div className="w-full">
            <TextareaComponent
              name="title"
              value={phrase}
              onChange={handleChange}
              placeholder="Ingrese Frase"
            />
            <ButtonComponent
              className="w-full bg-blue-800"
              onClick={handlePhrase}
              text={phraseSelected ? "Guardar" : "Crear"}
            />
          </div>
        </Modal>
      </>
    </PortalToMain>
  );
};

export default CreateEditPhraseModal;
