import { InputHTMLAttributes } from 'react';

export type InputVariant = 'error' | 'success';
export type InputSize = 'large' | 'medium' | 'small';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: InputVariant;
  size?: InputSize;
}
