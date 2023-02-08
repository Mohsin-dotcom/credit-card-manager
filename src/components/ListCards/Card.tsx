import CardImage from "./CardImage";
import deleteIcon from "../../assets/delete.svg";
import IconButton from "../Buttons/IconButton/IconButton";
import { CreditCard } from "../../types";
import "./Card.css";
import { useState } from "react";
interface Props {
  card: CreditCard;
  deleteCard: Function;
  makeDefaultCard: Function;
  activeCardId: string;
}


const Card: React.FC<Props> = ({
  card: { cardIdentifier, lastFour, accountHolder, expiryDate, cardBrand },
  deleteCard, makeDefaultCard, activeCardId
}) => {
  return (
    <div className={`card-container ${activeCardId === cardIdentifier && "preferred-card"}`} key={cardIdentifier} onClick={() => makeDefaultCard(cardIdentifier)}>
      <div className="flex-container">
        <CardImage cardBrand={cardBrand} />
        <IconButton>
          <img className="delete-icon" src={deleteIcon} onClick={() => deleteCard(cardIdentifier)} />
        </IconButton>
      </div>
      <span>{accountHolder}</span>
      <div className="flex-container">
        <span>
          <span className="masked-number">
            &#183;&#183;&#183;&#183; &#183;&#183;&#183;&#183;
            &#183;&#183;&#183;&#183;
          </span>
          &nbsp;
          {lastFour}
        </span>
      </div>
      <span>{expiryDate}</span>
    </div>
  );
};
export default Card;
