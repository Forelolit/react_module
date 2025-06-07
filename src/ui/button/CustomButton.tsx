import styles from './CustomButton.module.scss';
import type { FC } from 'react';
import type { CustomButtonProps } from './types';

export const CustomButton: FC<CustomButtonProps> = ({ children, variant = 'primary' }) => {
    return (
        <button
            className={`${styles.base} ${variant === 'primary' && styles.primary} ${variant === 'outline' && styles.outline}`}>
            {children}
        </button>
    );
};
