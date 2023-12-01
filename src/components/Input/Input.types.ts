import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export type InputVariant = 'default' | 'error' | 'success';
export type InputType = 'default' | 'search' | 'date';

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  inputType?: InputType;
  variant?: InputVariant;
  description?: string;
  label?: string;
}
