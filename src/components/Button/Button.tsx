import React, { type ButtonHTMLAttributes, type FC } from "react";
import { ArrowRight } from "react-bootstrap-icons";
import {
  Container,
  FilledButton,
  OutlinedButton,
  PlainButton,
} from "./Button.styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outline" | "plain";
  colorScheme?: "primary" | "accent";
  rounded?: boolean;
  arrow?: boolean;
}

const Button: FC<ButtonProps> = ({
  variant = "plain",
  colorScheme = "primary",
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
          $colorScheme={colorScheme}
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
          $colorScheme={colorScheme}
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
        <PlainButton
          $colorScheme={colorScheme}
          onClick={onClick}
          disabled={disabled}
          {...rest}
        >
          {content}
        </PlainButton>
      );
  }
};

export default Button;
