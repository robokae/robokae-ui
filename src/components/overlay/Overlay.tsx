import React, { type FC, type HTMLAttributes } from "react";
import { Container } from "./Overlay.styles";

interface OverlayProps extends HTMLAttributes<HTMLDivElement> {}

const Overlay: FC<OverlayProps> = ({ ...props }) => {
  return <Container {...props} />;
};

export default Overlay;
