import { HTMLAttributes } from "react";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  bold?: boolean;
  underline?: boolean;
  italic?: boolean;
  transform?: "capitalize" | "uppercase" | "lowercase" | "none";
  color?: string;
}
