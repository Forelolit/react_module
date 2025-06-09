import type { FC } from 'react';
import clsx from 'clsx';

import styles from './Typography.module.scss';
import { tagMap, type TypographyProps } from './types';

export const Typography: FC<TypographyProps> = ({
  children,
  as,
  className = '',
  size,
  color = 'text',
}) => {
  const Element = tagMap[as || 'p'];

  return (
    <Element
      className={clsx(
        className,
        styles.base,
        styles[`size-${size}`],
        styles[`as-${as}`],
        styles[`color-${color}`],
      )}
    >
      {children}
    </Element>
  );
};
