export interface TabTitleProps {
  index: number;
  title: string;
  setSelectedTab: (index: number) => void;
  isActive?: boolean;
}
