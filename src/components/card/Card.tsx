import React, { FC, HTMLAttributes, ReactNode } from "react";
import { Container } from "./Card.styles";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Card: FC<CardProps> = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

export default Card;
