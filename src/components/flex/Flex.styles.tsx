import styled from "styled-components";
import { FlexProps } from "./Flex.types";

export const Container = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction = "row" }) => direction};
  justify-content: ${({ justifyContent = "flex-start" }) => justifyContent};
  align-items: ${({ alignItems = "stretch" }) => alignItems};
  flex-wrap: ${({ wrap = "nowrap" }) => wrap};
  gap: ${({ gap = "0" }) => gap};
`;
