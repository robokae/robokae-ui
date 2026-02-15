import React from "react";
import type { ButtonHTMLAttributes, FC } from "react";
import * as bootstrapIcons from "react-bootstrap-icons";
import Icon from "../icon";
import { StyledButton } from "./IconButton.styles";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: keyof typeof bootstrapIcons;
}

const IconButton: FC<IconButtonProps> = ({ name, ...props }) => {
  return (
    <StyledButton {...props}>
      <Icon name={name} />
    </StyledButton>
  );
};

export default IconButton;
