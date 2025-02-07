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
import {
  changeModalCreatePhrases,
  changePhraseSelected,
  changePopupAlert,
} from "../../../../redux/sliders/global";
import { AppDispatch } from "../../../../shared/_architecture/domain/state.interface";
import { IStateRedux } from "../../../_architecture/domain/state.interface";
import { updatePhrases } from "../../../_architecture/application/updatePhrases";

const CreateEditDeletePhraseModal = () => {
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
      id: phraseSelected.phrase ? phraseSelected.phrase.id : null,
      category: phraseSelected.phrase
        ? phraseSelected.phrase.category
        : "general",
      description: phrase,
      userId: phraseSelected.phrase ? phraseSelected.phrase.userId : userId,
      created: phraseSelected.phrase
        ? phraseSelected.phrase.created
        : new Date().toISOString(),
      deleted: phraseSelected.phrase
        ? phraseSelected.type === "delete"
          ? true
          : phraseSelected?.phrase.deleted
        : false,
    };
    setLoading(true);
    let res: boolean = false;
    // el borrado es logico por lo que reutilizo el update
    if (phraseSelected.phrase) res = await updatePhrases(request);
    else res = await createPhrases(request);
    setLoading(false);
    if (res) {
      // vuelvo a pedir toda la data
      dispatch(getPhrasesSlider({ id: userId }));
      // alert(`Frase ${phraseSelected?"actualizada":"creada"}`);
      dispatch(
        changePopupAlert({
          open: true,
          type: "success",
          title: "Exito",
          message: `Frase ${
            phraseSelected.type === "delete"
              ? "Eliminada"
              : phraseSelected.phrase
              ? "Guardada"
              : "Creada"
          } correctamente`,
        })
      );
      dispatch(changePhraseSelected({ phrase: null, type: "" }));
      dispatch(changeModalCreatePhrases());
    } else {
      dispatch(
        changePopupAlert({
          open: true,
          type: "error",
          title: "Error",
          message: `Fallo al ${
            phraseSelected.type === "delete"
              ? "Eliminar"
              : phraseSelected.phrase
              ? "Editar"
              : "Crear"
          } frase`,
        })
      );
    }
  };

  useEffect(() => {
    if (phraseSelected.phrase) {
      setPhrase(phraseSelected.phrase?.description ?? "");
    }
  }, [phraseSelected]);

  return (
    <PortalToMain>
      <>
        {loading && <Loading />}
        <Modal
          title={`${
            phraseSelected.type === "delete"
              ? "Eliminar"
              : phraseSelected.phrase
              ? "Editar"
              : "Crear"
          } frase`}
          close={handleClose}
        >
          <div className="w-full">
            {phraseSelected.type === "delete" ? (
              <div className="mb-5">"¿Estas seguro de eliminar la frase?"</div>
            ) : (
              <TextareaComponent
                name="title"
                value={phrase}
                onChange={handleChange}
                placeholder="Ingrese Frase"
              />
            )}
            <ButtonComponent
              className={`w-full ${phraseSelected.type === "delete" ? "bg-red-800" : "bg-blue-800"}`}
              onClick={handlePhrase}
              text={
                phraseSelected.type === "delete"
                  ? "Eliminar"
                  : phraseSelected.phrase
                  ? "Guardar"
                  : "Crear"
              }
            />
          </div>
        </Modal>
      </>
    </PortalToMain>
  );
};

export default CreateEditDeletePhraseModal;
