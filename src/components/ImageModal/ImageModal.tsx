import Modal from "react-modal";
import css from "./imageModal.module.css";

Modal.setAppElement("#root");

import { IPhotoData } from "../App/App";

interface ImageModalProps {
  dataForModal: IPhotoData;
  onCloseModal: () => void;
  modalIsOpen: boolean;
}

const ImageModal: React.FC<ImageModalProps> = ({
  dataForModal,
  onCloseModal,
  modalIsOpen,
}) => {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onCloseModal}
        className={css.modal}
        overlayClassName={css.overlay}
      >
              <img
                  className={css.img}
          src={dataForModal.urls.regular}
          alt={
            dataForModal.alt_description
              ? dataForModal.alt_description
                  : "There is no description"
          }
        />

        <div className={css.describe}>
          <p>{dataForModal.description}</p>
          <p>Likes : {dataForModal.likes}</p>
        </div>
        <button onClick={onCloseModal} className={css.clsbtn}>close</button>
      </Modal>
    </>
  );
};

export default ImageModal;