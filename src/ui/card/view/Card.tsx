import clsx from 'clsx';
import type { FC } from 'react';
import { Typography } from '@ui/typography';

import type { CardProps } from '../types';

import styles from './Card.module.scss';

export const Card: FC<CardProps> = ({ className = '', name, children, image, imageAlt }) => {
  return (
    <article className={clsx(styles.card, className)}>
      <Typography as="h3">{name}</Typography>
      {children && <div>{children}</div>}
      {image && (
        <div className={styles.imageWrapper}>
          <img src={image} alt={imageAlt} className={styles.image} />
        </div>
      )}
    </article>
  );
};
