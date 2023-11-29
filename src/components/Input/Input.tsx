import classNames from 'classnames';

import type { InputProps } from './Input.types';

import styles from './Input.module.scss';

export const Input = ({ size = 'medium', variant, ...props }: InputProps) => {
  return (
    <input
      className={classNames(styles.Input, styles[`Input__size_${size}`], styles[`Input__variant_${variant}`])}
      type="text"
      {...props}
    />
  );
};
