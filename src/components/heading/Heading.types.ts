import { type ReactNode } from "react";
import { type typography } from "../../constants";

export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5";

export interface HeadingProps {
  as?: HeadingTag;
  weight?: keyof typeof typography.fontWeight;
  color?: string;
  children: ReactNode;
}
