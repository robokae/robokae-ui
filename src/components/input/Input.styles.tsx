import styled, { css } from "styled-components";
import { borderRadius, gap, padding } from "../../constants";

export const baseStyles = css`
  gap: ${gap.sm};
  padding: ${padding.xs};
  outline: none;
  color: ${({ theme }) => theme.text.primary};
  background-color: ${({ theme }) => theme.input.background};
  border: 1px solid ${({ theme }) => theme.line};
  border-radius: ${borderRadius.sm};
  font-size: 1rem;
`;

export const TextInput = styled.input`
  ${baseStyles}
`;

export const TextareaInput = styled.textarea<{
  resize?: string;
}>`
  ${baseStyles}
  resize: ${({ resize = "none" }) => resize};
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.input.label};
  font-size: smaller;
`;
