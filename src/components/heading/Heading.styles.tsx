import { breakpoint, typography } from "../../constants";
import styled from "styled-components";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5";

interface Props {
  as?: HeadingTag;
  weight?: keyof typeof typography.fontWeight;
  color?: string;
}

export const Heading = styled.h1<Props>`
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
