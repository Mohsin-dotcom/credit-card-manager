import { creditCardValidator } from "./creditCardValidator";


const testData = [
  {
    data:  {},
    results: {
      cardNumber: "Card number is required"
    },

  },
  {
    data:{
      cardNumber: "4565667666" ,
    },
    results: {
      cardNumber: "Card number is invalid"
    }
  },
  {
    data:{
      cardNumber: "4555 4113 5678 4566" ,
    },
    results: {
    }
  }
]

describe("CreditCard number Validator", () => {

  testData.forEach((testData)=>{
    it(`validates card number(${testData.data.cardNumber ?? 'No input'}) correctly`, () => {
      let errors = creditCardValidator(testData.data);
      expect(errors.cardNumber).toEqual(testData.results.cardNumber);
    });
  })
});
