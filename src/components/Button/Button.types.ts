import { MouseEventHandler } from "react";

export type ButtonTypes = "primary" | "secondary" | "error";

export interface ButtonProps {
  text: string;
  buttonType?: ButtonTypes;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
