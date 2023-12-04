import { useId } from 'react';
import classNames from 'classnames';

import { CalendarIcon, SearchIcon } from '../Icon';
import type { InputProps } from './Input.types';

import styles from './Input.module.scss';

export const InputWithIcon = ({
  variant = 'default',
  inputType = 'default',
}: {
  variant: InputProps['variant'];
  inputType: InputProps['inputType'];
}) => {
  const dateState: Record<string, boolean> = {
    [styles[`Date__success`]]: variant === 'success',
    [styles[`Date__error`]]: variant === 'error',
  };

  return (
    <>
      {inputType === 'date' && <CalendarIcon className={classNames(styles.Date, dateState)} />}
      {inputType === 'search' && <SearchIcon className={styles.Search} />}
    </>
  );
};

export const Input = ({ variant = 'default', inputType = 'default', description, label, ...props }: InputProps) => {
  const id = useId();

  return (
    <div className={styles.Wrapper}>
      {Boolean(label) && (
        <label htmlFor={id} className={styles.Label}>
          {label}
        </label>
      )}
      <InputWithIcon variant={variant} inputType={inputType} />
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
