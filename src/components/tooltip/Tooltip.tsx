import React, {
  type FC,
  type HTMLAttributes,
  type ReactNode,
  useState,
} from "react";
import { Container, Trigger } from "./Tooltip.styles";

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  position?: "top" | "bottom" | "left" | "right";
  children: ReactNode;
}

const Tooltip: FC<TooltipProps> = ({
  content,
  position = "bottom",
  children,
}) => {
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
