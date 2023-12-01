import { useId } from 'react';
import classNames from 'classnames';

import type { InputProps } from './Input.types';

import styles from './Input.module.scss';

export const Input = ({ variant, inputType, description, label, ...props }: InputProps) => {
  const id = useId();

  return (
    <>
      {Boolean(label) && (
        <label htmlFor={id} className={styles.Label}>
          {label}
        </label>
      )}
      <input
        id={id}
        className={classNames(styles.Input, {
          [styles[`Input__variant_${variant}`]]: Boolean(variant),
          [styles[`Input__inputType_${inputType}`]]: Boolean(inputType),
        })}
        {...props}
      />
      {Boolean(description) && (
        <span
          className={classNames(styles.Description, {
            [styles[`Description__variant_${variant}`]]: Boolean(variant),
          })}
        >
          {description}
        </span>
      )}
    </>
  );
};
