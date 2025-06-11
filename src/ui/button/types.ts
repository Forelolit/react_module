import type { CursorType } from 'types/types';

export interface CustomButtonProps extends CursorType {
  children: React.ReactNode;
  type?: 'submit' | 'button' | 'reset';
  variant?: 'primary' | 'outline' | 'accent';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
