import { FC } from "react";
import { TextProps } from "./Text.types";
import { Container } from "./Text.styles";
import React from "react";

const Text: FC<TextProps> = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

export default Text;
