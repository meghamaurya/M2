import { InputComponentProps } from "./input-type";

const InputComponent = ({
  formControlName,
  inputType,
  placeholder,
  onChange,
}: InputComponentProps) => {
  return (
    <div>
      <label htmlFor={formControlName}></label>
      <input
        type={inputType}
        id={formControlName}
        name={formControlName}
        placeholder={placeholder}
        onChange={(e) => onChange(formControlName, e.target.value)}
      />
    </div>
  );
};

export default InputComponent;
