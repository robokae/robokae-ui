import styled from "styled-components";
import Card from "../card";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Popup = styled(Card)`
  min-width: 20rem;
  width: max-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  &.boxShadow {
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`;
