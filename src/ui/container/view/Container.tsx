import type { FC } from 'react';
import clsx from 'clsx';

import type { ContainerProps } from '../types/types';

import styles from './Container.module.scss';

export const Container: FC<ContainerProps> = ({ children, className = '' }) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};
