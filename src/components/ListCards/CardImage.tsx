import visa from "../../assets/visa@2x.png";
import mc from "../../assets/mc@2x.png";
import amex from "../../assets/amex@2x.png";
import defaultCard from '../../assets/cc@2x.svg'

const cardImageSelector = {
  mc,
  visa,
  amex,
  cc: defaultCard
};

export type CardBrand = keyof typeof cardImageSelector;

interface Props {
  cardBrand: CardBrand;
}

const CardImage: React.FC<Props> = ({ cardBrand }) => {
  return (
      <img className="card-image" src={cardImageSelector[cardBrand]} alt={cardBrand} />
  );
};
export default CardImage;
