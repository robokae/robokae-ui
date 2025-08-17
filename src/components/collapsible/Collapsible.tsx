import React, {
  createContext,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTheme } from "styled-components";
import Flex from "../flex";
import Icon from "../icon";
import Heading from "../heading";
import { HeadingProps } from "../heading/Heading.types";
import { gap } from "../../constants";

interface CollapsibleContext {
  isCollapsed: boolean;
  toggle: () => void;
  animate: boolean;
}

export const CollapsibleContext = createContext<CollapsibleContext | undefined>(
  undefined
);

export const useCollapsibleContext = () => {
  const context = useContext(CollapsibleContext);

  if (!context) {
    throw new Error(
      "useCollapsibleContext must be used within a CollapsibleContext.Provider"
    );
  }

  return context;
};

function Collapsible({
  animate,
  children,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>> & { animate?: boolean }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggle = () => setIsCollapsed((prev) => !prev);

  return (
    <CollapsibleContext.Provider
      value={{ isCollapsed, toggle, animate: animate ?? true }}
    >
      <Flex direction="column" gap={gap.sm} {...rest}>
        {children}
      </Flex>
    </CollapsibleContext.Provider>
  );
}

Collapsible.Heading = function ({ as = "h5", children }: HeadingProps) {
  return <Heading as={as}>{children}</Heading>;
};

Collapsible.Trigger = function ({ children }: PropsWithChildren<{}>) {
  const theme = useTheme();
  const { isCollapsed, toggle } = useCollapsibleContext();

  return children ? (
    <div onClick={toggle}>{children}</div>
  ) : (
    <Icon
      name={isCollapsed ? "ChevronDown" : "ChevronUp"}
      color={theme.text.secondary}
      style={{ cursor: "pointer" }}
      onClick={toggle}
    />
  );
};

Collapsible.Content = function ({ children }: PropsWithChildren<{}>) {
  const { isCollapsed, animate } = useCollapsibleContext();
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("auto");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isCollapsed ? "0px" : `${contentRef.current.scrollHeight}px`);
    }
  }, [isCollapsed, children]);

  return (
    <div
      ref={contentRef}
      style={{
        height: height,
        overflow: "hidden",
        opacity: isCollapsed ? 0 : 1,
        transition: animate ? "all 0.25s ease" : "none",
      }}
    >
      {children}
    </div>
  );
};

export default Collapsible;
