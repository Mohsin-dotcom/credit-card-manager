import { CardBrand } from "../components/ListCards/CardImage";

export interface CreditCard {
    cardIdentifier: string;
    accountHolder: string;
    lastFour: string;
    expiryDate: string;
    cardBrand: CardBrand
    cvv?: string
    number?: string
  }
  