import { CreditCardFormValues } from "./CreditcardForm";

type CreditCardFormErrors = CreditCardFormValues;

const TEST_NOT_NUMERIC_ONLY_REGEX = /(?<! )[-a-zA-Z' ]{2,26}/i;

const TEST_16_NUMERIC_VALUE_REGEX = /^\d{16}$/

export const creditCardValidator = (
  values: CreditCardFormValues
): CreditCardFormErrors => {
  const errors: CreditCardFormErrors = {};

  // VALIDATION FOR CARD NUMBER 
  if (!values.cardNumber) {
    errors.cardNumber = "Card number is required";
  }

  if (
    values.cardNumber &&
    !TEST_16_NUMERIC_VALUE_REGEX.test(values.cardNumber)
  ) {
    errors.cardNumber = "Card number is invalid";
  }




  // VALIDATION FOR CARD ACCOUNT HOLDER NAME
  if (!values.accountHolder) {
    errors.accountHolder = "Account holder name is required";
  }

  if (
    values.accountHolder &&
    !TEST_NOT_NUMERIC_ONLY_REGEX.test(values.accountHolder)
  ) {
    errors.accountHolder = "Account holder name is invalid";
  }



  // VALIDATION FOR CARD EXPIRY DATE
  if (!values.expiryMonth || !values.expiryYear) {
    errors.expiryMonth = "Date is required or invalid";
  }



  // VALIDATION FOR CARD C.V.V
  if (!values.cvv) {
    errors.cvv = "Card C.V.V is required";
  }

  if (values.cvv && !/^\d{3,4}$/.test(values.cvv)) {
    errors.cvv = "Card C.V.V is invalid";
  }

  return errors;
};
