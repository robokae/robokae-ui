import styled, { css } from "styled-components";

export const Trigger = styled.span`
  position: relative;
  display: inline-block;
`;

export const Container = styled.div<{
  position: "top" | "bottom" | "left" | "right";
}>`
  width: max-content;
  position: absolute;
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  text-align: center;
  background-color: ${({ theme }) => theme.tooltip.background};
  color: ${({ theme }) => theme.tooltip.foreground};
  font-size: smaller;
  z-index: 10;

  ${({ position }) =>
    position === "top" &&
    css`
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      margin-bottom: 0.8rem;
    `}

  ${({ position }) =>
    position === "bottom" &&
    css`
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 0.8rem;
    `}

  ${({ position }) =>
    position === "left" &&
    css`
      top: 50%;
      right: 100%;
      transform: translateY(-50%);
      margin-right: 0.8rem;
    `}

  ${({ position }) =>
    position === "right" &&
    css`
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
      margin-left: 0.8rem;
    `}

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;

    ${({ position, theme }) =>
      position === "top" &&
      css`
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-width: 0.25rem 0.25rem 0 0.25rem;
        border-color: ${theme.tooltip.background} transparent transparent
          transparent;
      `}

    ${({ position, theme }) =>
      position === "bottom" &&
      css`
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-width: 0 0.25rem 0.25rem 0.25rem;
        border-color: transparent transparent ${theme.tooltip.background}
          transparent;
      `}

    ${({ position, theme }) =>
      position === "left" &&
      css`
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
        border-width: 0.25rem 0 0.25rem 0.25rem;
        border-color: transparent transparent transparent
          ${theme.tooltip.background};
      `}

    ${({ position, theme }) =>
      position === "right" &&
      css`
        top: 50%;
        right: 100%;
        transform: translateY(-50%);
        border-width: 0.25rem 0.25rem 0.25rem 0;
        border-color: transparent ${theme.tooltip.background} transparent
          transparent;
      `}
  }
`;
