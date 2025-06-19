import { useState } from 'react';
import { Typography } from '@ui/typography';
import { loader } from '@utils/constants/constants';
import { useTranslation } from 'react-i18next';

import type { CustomImageProps } from '../types/types';

import styles from './CustomImage.module.scss';

export const CustomImage = ({ alt, src, className = '' }: CustomImageProps) => {
  const [loading, setLoading] = useState(true);

  const { t } = useTranslation();

  return (
    <div className={styles.imageWrapper}>
      {loading && <Typography color="white">{t(loader[0])}</Typography>}
      <img src={src} alt={alt} onLoad={() => setLoading(false)} className={className} />
    </div>
  );
};
