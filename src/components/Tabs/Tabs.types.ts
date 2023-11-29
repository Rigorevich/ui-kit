import { ReactElement } from 'react';

import type { TabTitleProps } from './TabTitle/TabTitle.types';

export interface TabsProps {
  children: ReactElement<TabTitleProps>[];
  preSelectedTabIndex?: number;
}
