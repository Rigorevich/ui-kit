import { useId } from 'react';
import classNames from 'classnames';

import { CalendarIcon, SearchIcon } from '../Icon';
import type { InputProps } from './Input.types';

import styles from './Input.module.scss';

export const Input = ({ variant = 'default', inputType = 'default', description, label, ...props }: InputProps) => {
  const id = useId();

  return (
    <div className={styles.Wrapper}>
      {Boolean(label) && (
        <label htmlFor={id} className={styles.Label}>
          {label}
        </label>
      )}
      {inputType === 'date' ? (
        <CalendarIcon
          className={classNames(styles.Calendar, {
            [styles[`Calendar__success`]]: variant === 'success',
            [styles[`Calendar__error`]]: variant === 'error',
          })}
        />
      ) : (
        inputType === 'search' && <SearchIcon className={styles.Search} />
      )}
      <input
        id={id}
        autoComplete="off"
        className={classNames(styles.Input, {
          [styles[`Input__variant_${variant}_icon`]]: Boolean(variant) && Boolean(!description),
          [styles[`Input__variant_${variant}_border`]]: Boolean(variant),
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
    </div>
  );
};
