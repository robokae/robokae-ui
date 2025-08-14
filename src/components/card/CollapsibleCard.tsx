import React, { FC, HTMLAttributes, ReactNode, useState } from "react";
import { Heading } from "../heading/Heading.styles";
import { Card } from "./Card.styles";
import Icon from "../icon/Icon";
import { useTheme } from "styled-components";
import { Flex } from "../flex/Flex.styles";

interface Props extends HTMLAttributes<HTMLDivElement> {
  heading?: string;
  collapse?: boolean;
  children?: ReactNode;
}

const CollapsibleCard: FC<Props> = ({
  heading,
  collapse = false,
  children,
  ...rest
}) => {
  const [showContent, setShowContent] = useState(!collapse);
  const theme = useTheme();

  return (
    <Card {...rest}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        style={{ cursor: "pointer" }}
        onClick={() => setShowContent((prev) => !prev)}
      >
        <Heading as="h5">{heading}</Heading>
        <Icon
          name={showContent ? "ChevronUp" : "ChevronDown"}
          color={theme.text.secondary}
        />
      </Flex>
      {showContent && children}
    </Card>
  );
};

export default CollapsibleCard;
