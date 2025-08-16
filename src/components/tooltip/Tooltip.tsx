import React, { FC, HTMLAttributes, ReactNode, useState } from "react";
import { Container, Trigger } from "./Tooltip.styles";

interface Props extends HTMLAttributes<HTMLDivElement> {
  position?: "top" | "bottom" | "left" | "right";
  children: ReactNode;
}

const Tooltip: FC<Props> = ({ content, position = "right", children }) => {
  const [display, setDisplay] = useState(false);

  return (
    <Trigger
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
    >
      {children}
      {display && <Container position={position}>{content}</Container>}
    </Trigger>
  );
};

export default Tooltip;
