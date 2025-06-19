import { Typography } from '@ui/index';
import { Link } from 'react-router-dom';
import { path } from '@utils/constants/constants';

import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock = () => {
  return (
    <div className={styles.notFoundBlock}>
      <div className={styles.content}>
        <Typography as="h1" className={styles.title}>
          Page not found 😭
        </Typography>
        <Link to={path.home} className={styles.textAlign}>
          <Typography as="link" size="large">
            Go Home
          </Typography>
        </Link>
      </div>
    </div>
  );
};
