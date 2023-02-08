import { CreditCard } from "./types";

const cards: CreditCard[] = [
  {
    cardIdentifier: "11111111",
    accountHolder: "Super Mario",
    lastFour: "1111",
    expiryDate: "03/30",
    cardBrand: "visa",
  },
  {
    cardIdentifier: "222222",
    accountHolder: "Alice Doe",
    lastFour: "4242",
    expiryDate: "03/30",
    cardBrand: "mc",
  },
];

export const getMockedCreditCardData = () => {
  const FAST_SIMULATION_VALUE = 10;
  const SLOW_SIMULATION_VALUE = 1000000000 * 2;

  let countDown = FAST_SIMULATION_VALUE;
  while (countDown > 0) {
    countDown--;
  }
  return cards;
};
