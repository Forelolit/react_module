import { useState } from 'react';
import { Typography } from '@ui/typography';

import type { CustomImageProps } from '../types';

import styles from './CustomImage.module.scss';

export const CustomImage = ({ alt, src, className = '' }: CustomImageProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className={styles.imageWrapper}>
      {loading && <Typography color="white">Loading...</Typography>}
      <img src={src} alt={alt} onLoad={() => setLoading(false)} className={className} />
    </div>
  );
};
