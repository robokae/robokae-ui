import React, { type FC, type HTMLAttributes } from "react";
import { Container } from "./Overlay.styles";

const Overlay: FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  return <Container {...props} />;
};

export default Overlay;
