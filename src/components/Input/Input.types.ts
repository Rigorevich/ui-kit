import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export type InputVariant = 'error' | 'success';
export type InputType = 'search' | 'date';

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  inputType?: InputType;
  variant?: InputVariant;
  description?: string;
  label?: string;
}
