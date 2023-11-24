import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'filled' | 'outlined' | 'transparent';
export type ButtonColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  startSection?: ReactNode;
  endSection?: ReactNode;
  href?: string;
}
