import styled from "styled-components";

type InputProps = {
  type: string;
  id: string;
  inputName: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

export const InputContainer = styled.div`
  width: 100%;
  min-width: 200px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Label = styled.label`
  font-weight: 500;
`;

export const Input = styled.input<InputProps>`
  min-width: 200px;
  height: 34px;
  border-radius: 8px;
  border: 1px solid #6688cc;
`;
