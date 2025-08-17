import styled, { css } from "styled-components";
import { borderRadius, gap } from "../../constants";

const baseStyles = css`
  padding: 0.5rem 1rem;
  border: transparent;
  outline: none;
  color: ${({ theme }) => theme.accent};
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

export const FilledButton = styled.button<{ $rounded?: boolean }>`
  ${baseStyles};
  ${roundedStyle};
  color: ${({ theme }) => theme.button.foreground.secondary};
  background-color: ${({ theme }) => theme.button.background};

  &:hover {
    background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.1) 100%
    );
  }
`;

export const OutlinedButton = styled.button<{ $rounded?: boolean }>`
  ${baseStyles};
  ${roundedStyle};
  border: 1px solid ${({ theme }) => theme.button.foreground.primary};

  &:hover {
    background-color: ${({ theme }) => theme.button.background};
    color: ${({ theme }) => theme.button.foreground.secondary};
  }
`;

export const PlainButton = styled.button`
  ${baseStyles};
`;

export const Container = styled.div`
  display: flex;
  gap: ${gap.sm};
  align-items: center;
`;
