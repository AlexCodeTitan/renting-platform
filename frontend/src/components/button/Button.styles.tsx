import styled from "styled-components";
import { ButtonProps } from "./Button";

export const StyledButton = styled.button<ButtonProps>`
  width: ${(props) =>
    props.size === "sm" ? "80px" : props.size === "lg" ? "120px" : "100px"};

  background-color: ${(props) => (props.secondary ? "#59a7b4" : "#6688cc")};
  color: #f1f5f9;

  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.7em 0.9em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    background-color: ${(props) => (props.secondary ? "#67c0cf" : "#7d98cf")};
  }
  &:focus,
  &:focus-visible {
    background-color: ${(props) => (props.secondary ? "#42828d" : "#586b91")};
  }
  &:disabled {
    background-color: #555f72;
    color: #abb0b6;
  }
`;
