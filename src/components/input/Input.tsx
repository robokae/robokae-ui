import React, {
  forwardRef,
  useEffect,
  useRef,
  type InputHTMLAttributes,
  type Ref,
} from "react";
import {
  Container,
  ErrorMessage,
  FieldGroup,
  FieldHeader,
  StyledLabel,
  SublabelContainer,
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
  leftSublabel?: string;
  rightSublabel?: string;
  errorMessage?: string;
};

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  (
    {
      as = "input",
      label,
      leftSublabel,
      rightSublabel,
      errorMessage,
      ...props
    },
    ref,
  ) => {
    const fieldGroupRef = useRef<HTMLDivElement>(null);
    const sublabelContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (as !== "textarea") {
        return;
      }

      const fieldGroup = fieldGroupRef.current;
      const sublabelContainer = sublabelContainerRef.current;
      const textarea = fieldGroup?.querySelector("textarea");

      if (!fieldGroup || !sublabelContainer || !textarea) {
        return;
      }

      const syncSublabelWidth = () => {
        const width = textarea.getBoundingClientRect().width;
        sublabelContainer.style.width = `${Math.round(width)}px`;
      };

      syncSublabelWidth();

      const observer = new ResizeObserver(syncSublabelWidth);
      observer.observe(textarea);

      return () => observer.disconnect();
    }, [as]);

    return (
      <Container>
        <FieldGroup ref={fieldGroupRef}>
          <FieldHeader>
            {label && <StyledLabel htmlFor={props.id}>{label}</StyledLabel>}
            <SublabelContainer ref={sublabelContainerRef}>
              {leftSublabel && <p>{leftSublabel}</p>}
              {rightSublabel && <p>{rightSublabel}</p>}
            </SublabelContainer>
          </FieldHeader>
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
        </FieldGroup>
      </Container>
    );
  },
);

Input.displayName = "Input";

export default Input;
