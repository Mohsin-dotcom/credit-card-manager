import ReactDOM from "react-dom";
import IconButton from "../Buttons/IconButton/IconButton";
import closeIcon from "../../assets/close.svg";
import "./Modal.css";

interface Props {
  headerText: string;
  children?: React.ReactNode;
  closeModal: () => void;
}

const Modal: React.FC<Props> = ({ children, headerText, closeModal }) => {
  const overlayId = document.querySelector("#overlays");
  if (overlayId === null) return null;

  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="modal-content">
        <div className="flex-container">
          <h3>{headerText}</h3>
          <IconButton onClick={closeModal}>
            <img className="close-icon" src={closeIcon} />
          </IconButton>
        </div>
        {children}
      </div>
    </div>,
    overlayId
  );
};

export default Modal;
