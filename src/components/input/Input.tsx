import React, { forwardRef, InputHTMLAttributes, Ref } from "react";
import { Flex } from "../flex/Flex.styles";
import { Label, TextareaInput, TextInput } from "./Input.styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  as?: "input";
}

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  as: "textarea";
  resize?: "both" | "horizontal" | "vertical" | "none";
  rows?: number;
}

type Props = (InputProps | TextareaProps) & {
  label?: string;
};

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
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
          {...(props as InputProps)}
        />
      )}
    </Flex>
  )
);

Input.displayName = "Input";

export default Input;
