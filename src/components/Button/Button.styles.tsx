import { darken } from "polished";
import styled, { css } from "styled-components";

const baseStyles = css`
  padding: 0.5rem 1rem;
  border: transparent;
  outline: none;
  color: ${({ theme }) => theme.button.foreground.primary};
  background-color: transparent;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

const roundedStyle = css<{ rounded?: boolean }>`
  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 9999px;
    `}
`;

export const FilledButton = styled.button<{ rounded?: boolean }>`
  ${baseStyles};
  ${roundedStyle};
  color: ${({ theme }) => theme.button.foreground.secondary};
  background-color: ${({ theme }) => theme.button.background};

  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.button.background)};
  }
`;

export const OutlinedButton = styled.button<{ rounded?: boolean }>`
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
  gap: 0.5rem;
  align-items: center;
`;
