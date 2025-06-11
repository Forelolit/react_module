import type { HTMLInputTypeAttribute } from 'react';
import type { CursorType } from 'types/types';

export interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement>, CursorType {
  type: HTMLInputTypeAttribute;
}
