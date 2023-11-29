import classNames from 'classnames';
import { useCallback } from 'react';

import type { TabTitleProps } from './TabTitle.types';

import styles from './TabTitle.module.scss';

export const TabTitle = ({ index, title, setSelectedTab, isActive }: TabTitleProps) => {
  const handleClick = useCallback(() => {
    setSelectedTab(index);
  }, [index, setSelectedTab]);

  return (
    <li className={classNames(styles.Tab__title, { [styles.Tab__title_active]: isActive })}>
      <button className={styles.Tab__button} onClick={handleClick}>
        {title}
      </button>
    </li>
  );
};
