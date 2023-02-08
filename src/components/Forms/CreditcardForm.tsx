import useForm from "./hooks/useForm";
import InputField from "./Inputs/InputField";
import { creditCardValidator } from "./creditCardValidator";
import { brandDetector } from "../../utils/brandDetector";
import { CreditCard } from "../../types";
import { v4 as uuidv4 } from 'uuid';

export interface CreditCardFormValues {
  cardNumber?: string;
  accountHolder?: string;
  expiryMonth?: string;
  expiryYear?: string;
  cvv?: string;
}

interface Props {
  initialValues?: Record<string, any>;
  addNewCardHandler: (card: CreditCard) => void;
}


const CreditCardForm: React.FC<Props> = ({
  addNewCardHandler,
  initialValues = {},
}) => {
  
  const addCard = (values: Required<CreditCardFormValues>) => {
    const expiryDate = `${values.expiryMonth}/${values.expiryYear}`;
    const lastFour = values.cardNumber.substring(values.cardNumber.length - 4);
    addNewCardHandler({
      accountHolder: values.accountHolder,
      cvv: values.cvv,
      number: values.cardNumber,
      cardIdentifier: uuidv4(),
      cardBrand: brandDetector(values.cardNumber),
      expiryDate,
      lastFour,
 
    });
  };

  const { values, errors, onSubmit, onChange } = useForm<CreditCardFormValues>(
    () => addCard(values as Required<CreditCardFormValues>),
    creditCardValidator,
    {},
    initialValues
  );

  return (
    <form onSubmit={onSubmit}>
      <InputField
        label="Card Number"
        name="cardNumber"
        placeholder="4111 1111 1111 1111"
        value={values.cardNumber}
        onChange={onChange}
        type="text"
        errorMessage={errors.cardNumber}
      />
      <InputField
        label="Account Holder"
        name="accountHolder"
        placeholder="John Doe"
        value={values.accountHolder}
        onChange={onChange}
        type="text"
        errorMessage={errors.accountHolder}
      />
      <div className="date-container">
        <InputField
          className="flex-basis50"
          label="Expiry Month"
          name="expiryMonth"
          placeholder="MM"
          value={values.expiryMonth}
          onChange={onChange}
          type="number"
          errorMessage={errors.expiryMonth}
        />
        <InputField
          className="flex-basis50"
          label="Expiry Year"
          name="expiryYear"
          placeholder="YY"
          value={values.expiryYear}
          onChange={onChange}
          type="number"
          errorMessage={errors.expiryYear}
        />
      </div>
      <InputField
        label="C.V.V"
        name="cvv"
        placeholder="123"
        value={values.cvv}
        onChange={onChange}
        type="number"
        errorMessage={errors.cvv}
      />
      <button className="submit-button" type="submit">
        Save
      </button>
    </form>
  );
};

export default CreditCardForm;
