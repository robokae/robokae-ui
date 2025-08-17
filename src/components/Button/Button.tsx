import React, { ButtonHTMLAttributes, FC } from "react";
import { ArrowRight } from "react-bootstrap-icons";
import {
  Container,
  FilledButton,
  OutlinedButton,
  PlainButton,
} from "./Button.styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outline" | "plain";
  rounded?: boolean;
  arrow?: boolean;
}

const Button: FC<Props> = ({
  variant = "plain",
  rounded = false,
  arrow = false,
  disabled = false,
  onClick,
  children,
  ...rest
}) => {
  const content = arrow ? (
    <Container>
      {children}
      <ArrowRight />
    </Container>
  ) : (
    children
  );

  switch (variant) {
    case "filled":
      return (
        <FilledButton
          $rounded={rounded}
          disabled={disabled}
          onClick={onClick}
          {...rest}
        >
          {content}
        </FilledButton>
      );
    case "outline":
      return (
        <OutlinedButton
          $rounded={rounded}
          disabled={disabled}
          onClick={onClick}
          {...rest}
        >
          {content}
        </OutlinedButton>
      );
    default:
      return (
        <PlainButton onClick={onClick} disabled={disabled} {...rest}>
          {content}
        </PlainButton>
      );
  }
};

export default Button;
