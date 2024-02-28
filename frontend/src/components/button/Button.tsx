import React from "react";
import { StyledButton } from "./Button.styles";

export type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  secondary?: boolean;
  disabled?: boolean;
  size?: "sm" | "lg";
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <StyledButton
      onClick={props.onClick}
      size={props.size}
      disabled={props.disabled}
      data-secondary={props.secondary ? "true" : "false"}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
