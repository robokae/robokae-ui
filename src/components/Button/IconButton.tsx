import React from "react";
import type { ButtonHTMLAttributes, FC } from "react";
import * as bootstrapIcons from "react-bootstrap-icons";
import Icon from "../icon";
import { StyledButton } from "./IconButton.styles";

interface IconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: keyof typeof bootstrapIcons;
}

const IconButton: FC<IconProps> = ({ name, ...props }) => {
  return (
    <StyledButton {...props}>
      <Icon name={name} />
    </StyledButton>
  );
};

export default IconButton;
