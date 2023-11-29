import type { TabPanelProps } from './TabPanel.types';

import styles from './TabPanel.module.scss';

export const TabPanel = ({ children }: TabPanelProps) => {
  return <div className={styles.Tab__panel}>{children}</div>;
};
