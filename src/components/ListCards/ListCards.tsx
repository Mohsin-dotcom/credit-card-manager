import { forwardRef, useImperativeHandle, useState } from "react";
import { getMockedCreditCardData } from "../../mockCreditCardData";
import { CreditCard } from "../../types";
import Card from "./Card";

export type SaveCreditCardFormHandle = {
  saveNewCard: (card: CreditCard) => void;
};

interface Props { }

const ListCards = forwardRef<SaveCreditCardFormHandle, Props>(
  (_, forwardedRef) => {
    // const [isPrefCard, setIsPrefCard] = useState("");
    const [activeCardId, setActiveCardId] = useState("");

    const [saveCards, setSavedCards] = useState<CreditCard[]>(getMockedCreditCardData());

    const saveNewCard = (card: CreditCard) => {
      setSavedCards([card, ...saveCards]);
    };

    console.log('saveCards', saveCards);


    // TODO: implementation of actual deletion of card
    const deleteCard = (identifier: String) => {
      let filteredArr = saveCards.filter((item) => item.cardIdentifier !== identifier);
      setSavedCards(filteredArr);
    }

    const makeDefaultCard = (identifier: string) => {
      setActiveCardId(identifier);

    }

    useImperativeHandle(forwardedRef, () => ({
      saveNewCard,
    }));

    if (saveCards.length < 1) {
      return <div>You have no saved card , please add one</div>;
    }

    return (
      <div className={"list"}>
        {saveCards.map((card) => {
          return (
            <Card
              card={card}
              key={card.cardIdentifier}
              deleteCard={deleteCard}
              activeCardId={activeCardId}
              makeDefaultCard={makeDefaultCard}
            />
          );
        })}
      </div>
    );
  }
);
export default ListCards;
