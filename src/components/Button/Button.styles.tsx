import styled, { css } from "styled-components";
import { borderRadius, gap } from "../../constants";

const baseStyles = css`
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

const roundedStyle = css<{ $rounded?: boolean }>`
  ${({ $rounded }) => css`
    border-radius: ${$rounded ? borderRadius.pill : borderRadius.sm};
  `}
`;

export const FilledButton = styled.button<{
  $colorScheme: string;
  $rounded?: boolean;
}>`
  ${baseStyles};
  ${roundedStyle};
  ${({ theme, $colorScheme }) => {
    const { text, background, hoverBackground, hoverText } =
      theme.button[$colorScheme];

    return css`
      color: ${text};
      background-color: ${background};

      &:hover {
        background-color: ${hoverBackground};
        color: ${hoverText};
      }
    `;
  }}
`;

export const OutlinedButton = styled.button<{
  $colorScheme: string;
  $rounded?: boolean;
}>`
  ${baseStyles};
  ${roundedStyle};
  ${({ theme, $colorScheme }) => {
    const { text, background } = theme.button[$colorScheme];

    return css`
      color: ${background};
      background-color: transparent;
      border: 1px solid ${background};

      &:hover {
        color: ${text};
        background-color: ${background};
        border-color: transparent;
      }
    `;
  }}
`;

export const PlainButton = styled.button<{ $colorScheme: string }>`
  ${baseStyles};
  padding: 0;
  color: ${({ theme, $colorScheme }) => theme.button[$colorScheme].background};
`;

export const Container = styled.div`
  display: flex;
  gap: ${gap.sm};
  align-items: center;
`;
