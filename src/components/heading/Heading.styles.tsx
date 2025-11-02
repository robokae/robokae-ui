import { breakpoint, typography } from "../../constants";
import styled from "styled-components";
import { type HeadingProps, type HeadingTag } from "./Heading.types";

export const Container = styled.h1<HeadingProps>`
  font-weight: ${({ weight }) => typography.fontWeight[weight || "bold"]};
  font-size: ${({ as = "h1" }) =>
    typography.fontSize.heading[as as HeadingTag]?.lg ||
    typography.fontSize.heading.h1.lg};
  color: ${({ color, theme }) => color || theme.text.primary};
  margin: 0;

  @media ${breakpoint.tablet} {
    font-size: ${({ as = "h1" }) =>
      typography.fontSize.heading[as as HeadingTag]?.sm ||
      typography.fontSize.heading.h1.sm};
  }
`;
