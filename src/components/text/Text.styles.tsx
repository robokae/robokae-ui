import styled from "styled-components";

interface Props {
  bold?: boolean;
  underline?: boolean;
  italic?: boolean;
  transform: "capitalize" | "uppercase" | "lowercase" | "none";
  color?: string;
}

export const Text = styled.p<Props>`
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  text-decoration: ${({ underline }) => (underline ? "underline" : "none")};
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
  text-transform: ${({ transform = "none" }) => transform};
  color: ${({ color, theme }) => color || theme.text.primary};
`;
