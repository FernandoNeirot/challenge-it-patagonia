import { useState } from "react";
import { createPhrases } from "../../../_architecture/application/createPhrases";
import { IPhrases } from "../../../_architecture/domain/phrases.interfaces";
import PortalToMain from "../../PortalToMain";
import ButtonComponent from "../button";

import Modal from "../modal";
import TextareaComponent from "../textarea";
import useAuth from "../../../../hooks/useAuth";
import Loading from "../loading";

interface CreatePhraseProps {
  handleModalCreatePhrase: () => void;
}

const CreatePhraseModal = ({ handleModalCreatePhrase }: CreatePhraseProps) => {
  const [phrase, setPhrase] = useState<string>("");
  const [loading, setLoading] = useState(false)
  const {userId}= useAuth();
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPhrase(e.target.value);
  };
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
      handleModalCreatePhrase();
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
      <Modal title="Crear frase" close={handleModalCreatePhrase}>
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
