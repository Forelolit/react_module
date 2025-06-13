import { Typography } from '@ui/typography';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Typography as="lead">Footer</Typography>
    </footer>
  );
};
