import React, { FC } from "react";
import { HeadingProps } from "./Heading.types";
import { Container } from "./Heading.styles";

const Heading: FC<HeadingProps> = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

export default Heading;
