import { Typography } from 'ui/typography';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Typography as="lead">Header</Typography>
    </header>
  );
};
