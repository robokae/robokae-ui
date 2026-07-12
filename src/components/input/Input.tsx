import React, { forwardRef, type InputHTMLAttributes, type Ref } from "react";
import {
  Container,
  ErrorMessage,
  TextareaInput,
  TextInput,
} from "./Input.styles";

interface DefaultInputProps extends InputHTMLAttributes<HTMLInputElement> {
  as?: "input";
}

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  as: "textarea";
  resize?: "both" | "horizontal" | "vertical" | "none";
  rows?: number;
}

export type InputProps = (DefaultInputProps | TextareaProps) & {
  label?: string;
  errorMessage?: string;
};

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  ({ as = "input", label, errorMessage, ...props }, ref) => (
    <Container>
      {label && <label htmlFor={props.id}>{label}</label>}
      {as === "textarea" ? (
        <TextareaInput
          className={errorMessage ? "error" : ""}
          ref={ref as Ref<HTMLTextAreaElement>}
          rows={(props as TextareaProps).rows || 5}
          resize={(props as TextareaProps).resize}
          {...(props as TextareaProps)}
        />
      ) : (
        <TextInput
          className={errorMessage ? "error" : ""}
          ref={ref as Ref<HTMLInputElement>}
          {...(props as DefaultInputProps)}
        />
      )}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  ),
);

Input.displayName = "Input";

export default Input;
