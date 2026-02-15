import React from "react";
import type { ButtonHTMLAttributes, FC } from "react";
import * as bootstrapIcons from "react-bootstrap-icons";
import { StyledButton } from "./IconButton.styles";
import { Icon } from "../icon";

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
