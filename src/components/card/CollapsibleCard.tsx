import React, { FC, HTMLAttributes, ReactNode, useState } from "react";
import { Heading } from "../heading/Heading.styles";
import { Card } from "./Card.styles";
import { CardHeader, IconContainer } from "./CollapsibleCard.styles";
import Icon from "../icon/Icon";

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

  return (
    <Card {...rest}>
      <CardHeader onClick={() => setShowContent((prev) => !prev)}>
        <Heading as="h5">{heading}</Heading>
        <IconContainer>
          <Icon name={showContent ? "ChevronUp" : "ChevronDown"} />
        </IconContainer>
      </CardHeader>
      {showContent && children}
    </Card>
  );
};

export default CollapsibleCard;
