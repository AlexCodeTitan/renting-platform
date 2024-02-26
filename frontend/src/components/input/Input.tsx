import React from "react";
import { Input, InputContainer, Label } from "./Input.style";

export type InputComponentProps = {
  htmlFor?: string;
  labelText?: string;
  type: string;
  id: string;
  inputName: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

const InputGroup: React.FC<InputComponentProps> = ({ ...props }) => {
  return (
    <InputContainer>
      <Label htmlFor={props.htmlFor}>{props.labelText}</Label>
      <Input
        type={props.type}
        id={props.id}
        inputName={props.inputName}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
      />
    </InputContainer>
  );
};

export default InputGroup;
