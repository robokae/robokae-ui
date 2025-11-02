import React, { type FC } from "react";
import { Container } from "./Flex.styles";
import { type FlexProps } from "./Flex.types";

const Flex: FC<FlexProps> = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

export default Flex;
