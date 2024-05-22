import { ButtonT } from "../types";

const Button = ({ callback, disabled, text }: ButtonT) => {
  return (
    <button
      onClick={callback}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
