import { ReactElement, ReactNode } from 'react';

export interface TabPanelProps {
  title: string;
  children: ReactNode | ReactElement[];
}
