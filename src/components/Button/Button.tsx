import React from "react";
import classNames from "classnames";

import { ButtonProps } from "./Button.types";

import styles from "./Button.module.scss";

export const Button = ({
  buttonType = "primary",
  text,
  disabled,
  onClick = () => {},
}: ButtonProps) => {
  const styledType: Record<string, boolean> = {
    [styles.Button__primary]: buttonType === "primary",
    [styles.Button__secondary]: buttonType === "secondary",
    [styles.Button__error]: buttonType === "error",
  };

  return (
    <button
      type="button"
      className={classNames(styles.Button, styledType)}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
