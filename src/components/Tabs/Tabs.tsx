import { useState } from 'react';

import { TabTitle } from './TabTitle';
import type { TabsProps } from './Tabs.types';

import styles from './Tabs.module.scss';

export const Tabs = ({ children, preSelectedTabIndex }: TabsProps) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(preSelectedTabIndex || 0);

  return (
    <div className={styles.Tabs}>
      <ul className={styles.Tabs__list}>
        {children.map((item, index) => (
          <TabTitle
            key={item.props.title}
            title={item.props.title}
            index={index}
            isActive={index === selectedTabIndex}
            setSelectedTab={setSelectedTabIndex}
          />
        ))}
      </ul>

      {children[selectedTabIndex]}
    </div>
  );
};
