import React, { FC } from "react";
import * as icons from "react-bootstrap-icons";
import { icon } from "../../constants";
import { Flex } from "../flex/Flex.styles";

interface Props {
  name: keyof typeof icons;
  size?: keyof typeof icon;
}

const Icon: FC<Props> = ({ name, size = "sm", ...props }) => {
  const BootstrapIcon = icons[name];
  if (!BootstrapIcon) {
    throw new Error(`No Bootstrap icon found for '${name}'`);
  }
  return (
    <Flex alignItems="center" {...props}>
      <BootstrapIcon size={icon[size]} />
    </Flex>
  );
};

export default Icon;
