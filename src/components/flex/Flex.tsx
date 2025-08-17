import React, { FC } from "react";
import { Container } from "./Flex.styles";
import { FlexProps } from "./Flex.types";

const Flex: FC<FlexProps> = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

export default Flex;
