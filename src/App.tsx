import { useRef, useState } from "react";
import CreditCardForm from "./components/Forms/CreditcardForm";
import ListCards, {
  SaveCreditCardFormHandle,
} from "./components/ListCards/ListCards";
import AddCardModal from "./components/Modals/Modal";
import "./App.css";
import { CreditCard } from "./types";

function App() {
  const [showAddModal, setShowAddCardModal] = useState(false);
  const addToListRef = useRef<SaveCreditCardFormHandle>(null);

  const handleAddCardClick = () => {
    setShowAddCardModal(true);
  };

  const closeModal = () => {
    setShowAddCardModal(false);
  };

  const addNewCard = (card: CreditCard) => {
    addToListRef?.current?.saveNewCard(card);
    closeModal();
  };

  return (
    <div className="App">
      <header>
        <div className="header-content">
          <h3 className="child">Zooplus Payment App</h3>
        </div>
      </header>
      <div className="main-app-content">
        <ListCards ref={addToListRef} />
        <button className="add-new-card-btn" onClick={handleAddCardClick}>
          Add new card
        </button>
        {showAddModal && (
          <AddCardModal
            closeModal={closeModal}
            headerText="Please provide your card data"
          >
            <CreditCardForm addNewCardHandler={addNewCard} />
          </AddCardModal>
        )}
      </div>
    </div>
  );
}

export default App;
