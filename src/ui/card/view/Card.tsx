import clsx from 'clsx';
import { type FC } from 'react';
import { Typography } from '@ui/typography';
import { CustomImage } from '@ui/customImage';

import type { CardProps } from '../types';

import styles from './Card.module.scss';

export const Card: FC<CardProps> = ({ className = '', name, children, image, imageAlt }) => {
  return (
    <article className={clsx(styles.card, className)}>
      <Typography as="h3">{name}</Typography>

      {image && (
        <div className={styles.imageWrapper}>
          <CustomImage src={image} alt={`${imageAlt} image`} />
        </div>
      )}

      {children && <div>{children}</div>}
    </article>
  );
};
