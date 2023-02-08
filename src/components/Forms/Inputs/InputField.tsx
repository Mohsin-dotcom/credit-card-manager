import { InputHTMLAttributes } from "react";
import  './InputField.css'
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
}

const InputField: React.FC<Props> = ({
  errorMessage = "",
  onChange,
  label,
  value,
  name,
  type,
  placeholder,
  className=''
}) => {
  return (
    <div className={`fieldContainer ${className}`}>
      <span>{label}</span>
      <input
        className="field-input"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
      />
      <span className="input-error">{errorMessage}</span>
    </div>
  );
};
export default InputField;
