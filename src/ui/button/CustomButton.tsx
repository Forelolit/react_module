import type { FC } from 'react';
import clsx from 'clsx';

import styles from './CustomButton.module.scss';
import type { CustomButtonProps } from './types';

export const CustomButton: FC<CustomButtonProps> = ({
  children,
  variant = 'primary',
  type = 'submit',
  cursor = 'pointer',
  size = 'medium',
  className = '',
  disabled,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        className,
        styles.base,
        styles[`variant-${variant}`],
        styles[`cursor-${cursor}`],
        styles[`size-${size}`],
        disabled && styles.disabled,
      )}
      type={type}
    >
      {children}
    </button>
  );
};
