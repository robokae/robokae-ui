import styled from "styled-components";
import { type TextProps } from "./Text.types";

export const Container = styled.p<TextProps>`
  margin: 0;
  padding: 0;
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  text-decoration: ${({ underline }) => (underline ? "underline" : "none")};
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
  text-transform: ${({ transform = "none" }) => transform};
  color: ${({ color, theme }) => color || theme.text.primary};
`;
