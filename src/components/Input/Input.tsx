import { Fragment } from 'react';
import classNames from 'classnames';

import { InputProps } from './Input.types';

import styles from './Input.module.scss';

export const Input = ({
  id,
  disabled,
  label,
  message,
  error,
  success,
  onChange,
  placeholder,
  ...props
}: InputProps) => {
  return (
    <Fragment>
      <label
        className={classNames(styles.Label, {
          [styles.Label__disabled]: disabled,
        })}
      >
        <p
          className={classNames(styles.Text, {
            [styles.Text__disabled]: disabled,
            [styles.Text__error]: error,
          })}
        >
          {label}
        </p>
      </label>
      <input
        className={classNames(styles.Input, {
          [styles.Input__disabled]: disabled,
          [styles.Input__error]: error,
          [styles.Input__success]: success,
        })}
        id={id}
        type="text"
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        {...props}
      />
      <div className={styles.Message}>
        <p
          className={classNames(styles.Text, {
            [styles.Text__error]: error,
          })}
        >
          {message}
        </p>
      </div>
    </Fragment>
  );
};
