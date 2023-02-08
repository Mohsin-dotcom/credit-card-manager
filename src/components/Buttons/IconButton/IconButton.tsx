import { ButtonHTMLAttributes } from "react";
import './IconButton.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const IconButton: React.FC<Props> = ({ onClick, children , className }) => {
  return (
    <button className={`icon-btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
export default IconButton;
