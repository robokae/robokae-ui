import { MouseEventHandler, ReactNode } from "react";

export interface ButtonProps {
  variant?: "filled" | "outline" | "plain";
  rounded?: boolean;
  arrow?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}
