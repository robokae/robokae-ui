import React, { forwardRef, type InputHTMLAttributes, type Ref } from "react";
import { Label, TextareaInput, TextInput } from "./Input.styles";
import { Flex } from "../flex";

export interface DefaultInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  as?: "input";
}

export interface TextareaProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  as: "textarea";
  resize?: "both" | "horizontal" | "vertical" | "none";
  rows?: number;
}

type InputProps = (DefaultInputProps | TextareaProps) & {
  label?: string;
};

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  ({ as = "input", label, ...props }, ref) => (
    <Flex direction="column" gap="0.5rem">
      {label && <Label htmlFor={props.id}>{label}</Label>}
      {as === "textarea" ? (
        <TextareaInput
          ref={ref as Ref<HTMLTextAreaElement>}
          rows={(props as TextareaProps).rows || 5}
          resize={(props as TextareaProps).resize}
          {...(props as TextareaProps)}
        />
      ) : (
        <TextInput
          ref={ref as Ref<HTMLInputElement>}
          {...(props as DefaultInputProps)}
        />
      )}
    </Flex>
  ),
);

Input.displayName = "Input";

export default Input;
