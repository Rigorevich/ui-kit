import { useId } from 'react';
import classNames from 'classnames';

import type { CheckboxProps } from './Checkbox.types';

import styles from './Checkbox.module.scss';

export const Checkbox = ({ label, isError, ...rest }: CheckboxProps) => {
  const id = useId();

  return (
    <div className={styles.Wrapper}>
      <input
        type="checkbox"
        id={id}
        className={classNames(styles.Checkbox, {
          [styles.Checkbox_error]: isError,
        })}
        {...rest}
      />
      <label htmlFor={id} className={styles.Label}>
        {label}
      </label>
    </div>
  );
};
