import type { FC } from 'react';

import styles from './Typography.module.scss';
import type { TypographyProps } from './types';

export const Typography: FC<TypographyProps> = ({ children }) => {
  return <span className={`${styles.base}`}>{children}</span>;
};
