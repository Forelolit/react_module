import type { FC } from 'react';
import clsx from 'clsx';
import { capitalize } from '@utils/strings/capitalize';

import { tagMap, type TypographyProps } from '../types';

import styles from './Typography.module.scss';

export const Typography: FC<TypographyProps> = ({
  children,
  as = 'p',
  className = '',
  size,
  color = 'text',
  listStyle,
}) => {
  const Element = tagMap[as || 'p'];

  return (
    <Element
      className={clsx(
        className,
        styles.base,
        size && styles[`size${capitalize(size)}`],
        listStyle && styles[`listStyle${capitalize(listStyle)}`],
        styles[`as${capitalize(as)}`],
        styles[`color${capitalize(color)}`],
      )}
    >
      {children}
    </Element>
  );
};
