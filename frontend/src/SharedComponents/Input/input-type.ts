export interface InputComponentProps {
  formControlName: string;
  placeholder?: string;
  inputType: string;
  onChange: (name: string, value: string) => void;
}
