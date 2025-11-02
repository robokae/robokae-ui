import styled, { css } from "styled-components";
import { borderRadius, gap } from "../../constants";

const baseStyles = css`
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  background-color: transparent;
  border-radius: ${borderRadius.sm};
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

const roundedStyle = css<{ $rounded?: boolean }>`
  ${({ $rounded }) =>
    $rounded &&
    css`
      border-radius: ${borderRadius.pill};
    `}
`;

export const FilledButton = styled.button<{
  $colorScheme: string;
  $rounded?: boolean;
}>`
  ${baseStyles};
  ${roundedStyle};
  color: ${({ theme, $colorScheme }) =>
    (theme.button as any)[$colorScheme].foreground.primary};
  background-color: ${({ theme, $colorScheme }) =>
    (theme.button as any)[$colorScheme].background};

  &:hover {
    background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.1) 100%
    );
  }
`;

export const OutlinedButton = styled.button<{
  $colorScheme: string;
  $rounded?: boolean;
}>`
  ${baseStyles};
  ${roundedStyle};
  border: 1px solid
    ${({ theme, $colorScheme }) =>
      (theme.button as any)[$colorScheme].background.primary};
  color: ${({ theme, $colorScheme }) =>
    (theme.button as any)[$colorScheme].foreground.secondary};

  &:hover {
    border-color: transparent;
    background-color: ${({ theme, $colorScheme }) =>
      (theme.button as any)[$colorScheme].background};
    color: ${({ theme, $colorScheme }) =>
      (theme.button as any)[$colorScheme].foreground.primary};
  }
`;

export const PlainButton = styled.button<{ $colorScheme: string }>`
  ${baseStyles};
  color: ${({ theme, $colorScheme }) =>
    (theme.button as any)[$colorScheme].foreground.secondary};
`;

export const Container = styled.div`
  display: flex;
  gap: ${gap.sm};
  align-items: center;
`;
