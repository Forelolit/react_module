import type { FC } from 'react';
import clsx from 'clsx';
import { capitalize } from '@utils/strings/capitalize';

import type { CustomButtonProps } from '../types/types';

import styles from './CustomButton.module.scss';

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
        styles[`variant${capitalize(variant)}`],
        styles[`cursor${capitalize(cursor)}`],
        styles[`size${capitalize(size)}`],
        disabled && styles.disabled,
      )}
      type={type}
    >
      {children}
    </button>
  );
};
