import classNames from 'classnames';

import type { ButtonProps } from './Button.types';

import styles from './Button.module.scss';

export const Button = (props: ButtonProps) => {
  const {
    variant = 'outlined',
    color = 'primary',
    size = 'medium',
    children,
    startSection,
    endSection,
    href,
    ...rest
  } = props;

  const buttonClasses = [
    [styles.Button],
    [styles[`Button__variant_${variant}`]],
    [styles[`Button__color_${color}`]],
    [styles[`Button__size_${size}`]],
  ];

  return (
    <button className={classNames(...buttonClasses)} {...rest}>
      {Boolean(startSection) && <span className={styles.Button__addon}>{startSection}</span>}
      {href ? (
        <a className={styles.Button__link} href={href}>
          {children}
        </a>
      ) : (
        <span className={styles.Button__label}>{children}</span>
      )}
      {Boolean(endSection) && <span className={styles.Button__addon}>{endSection}</span>}
    </button>
  );
};
