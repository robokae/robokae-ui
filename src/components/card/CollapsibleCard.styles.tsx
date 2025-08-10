import styled from "styled-components";

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  color: ${({ theme }) => theme.text.secondary};
`;
