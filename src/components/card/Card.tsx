import React, { FC, HTMLAttributes, PropsWithChildren, ReactNode } from "react";
import { Container } from "./Card.styles";
import Heading from "../heading";
import { HeadingProps } from "../heading/Heading.types";

function Card({
  children,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <Container {...rest}>{children}</Container>;
}

Card.Heading = function ({ as = "h5", children, ...rest }: HeadingProps) {
  return (
    <Heading as={as} {...rest}>
      {children}
    </Heading>
  );
};

Card.Content = function ({
  children,
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return children;
};

export default Card;
