import styled from "styled-components";
import { borderRadius, padding, gap } from "../../constants";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${padding.md};
  border-radius: ${borderRadius.md};
  background-color: ${({ theme }) => theme.background.secondary};
  color: ${({ theme }) => theme.text.primary};
  gap: ${gap.sm};
`;
