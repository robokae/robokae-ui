import styled from "styled-components";
import Button from "./Button";

export const StyledButton = styled(Button)`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.button.hover};
  }
`;
