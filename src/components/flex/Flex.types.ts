import { HTMLAttributes, ReactNode } from "react";

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column";
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: string;
  children: ReactNode;
}
