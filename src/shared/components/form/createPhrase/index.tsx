import PortalToMain from "../../PortalToMain";
import Modal from "../modal";

interface CreatePhraseProps {
  handleModalCreatePhrase: () => void;
}

const CreatePhraseModal = ({ handleModalCreatePhrase }: CreatePhraseProps) => {
  return (
    <PortalToMain>
      <Modal title="Crear frase" close={handleModalCreatePhrase}>
        <div className="bg-red-400">cree</div>
      </Modal>
    </PortalToMain>
  );
};

export default CreatePhraseModal;
