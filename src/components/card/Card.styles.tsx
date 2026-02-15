import styled from "styled-components";
import { borderRadius, padding, gap } from "../../constants";
import { Flex } from "../flex";

export const Container = styled(Flex)`
  flex-direction: column;
  padding: ${padding.md};
  border-radius: ${borderRadius.md};
  background-color: ${({ theme }) => theme.background.secondary};
  color: ${({ theme }) => theme.text.primary};
  gap: ${gap.sm};
`;
