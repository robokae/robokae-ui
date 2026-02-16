import { type ReactNode } from "react";

export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5";

export interface HeadingProps {
  as?: HeadingTag;
  weight?: "regular" | "medium" | "bold";
  color?: string;
  children: ReactNode;
}
