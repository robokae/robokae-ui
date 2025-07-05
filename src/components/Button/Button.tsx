import React, { FC } from "react";
import { ButtonProps } from "./Button.types";
import { ArrowRight } from "react-bootstrap-icons";
import {
  Container,
  FilledButton,
  OutlinedButton,
  PlainButton,
} from "./Button.styles";

const Button: FC<ButtonProps> = ({
  variant = "plain",
  rounded = false,
  arrow = false,
  disabled = false,
  onClick,
  ...props
}) => {
  const children = arrow ? (
    <Container>
      {props.children}
      <ArrowRight />
    </Container>
  ) : (
    props.children
  );

  switch (variant) {
    case "filled":
      return (
        <FilledButton rounded={rounded} disabled={disabled} onClick={onClick}>
          {children}
        </FilledButton>
      );
    case "outline":
      return (
        <OutlinedButton rounded={rounded} disabled={disabled} onClick={onClick}>
          {children}
        </OutlinedButton>
      );
    default:
      return (
        <PlainButton onClick={onClick} disabled={disabled}>
          {children}
        </PlainButton>
      );
  }
};

export default Button;
