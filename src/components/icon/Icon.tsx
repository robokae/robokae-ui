import React, { type FC, type HTMLAttributes } from "react";
import * as bootstrapIcons from "react-bootstrap-icons";
import { iconSize } from "../../constants";
import { useTheme } from "styled-components";
import Flex from "../flex";

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
  name: keyof typeof bootstrapIcons;
  size?: keyof typeof iconSize;
  color?: string;
}

const Icon: FC<IconProps> = ({ name, size = "sm", color, ...props }) => {
  const theme = useTheme();

  const BootstrapIcon = bootstrapIcons[name];
  if (!BootstrapIcon) {
    throw new Error(`No Bootstrap icon found for '${name}'`);
  }

  return (
    <Flex alignItems="center" {...props}>
      <BootstrapIcon
        size={iconSize[size]}
        color={color || theme.text.primary}
      />
    </Flex>
  );
};

export default Icon;
