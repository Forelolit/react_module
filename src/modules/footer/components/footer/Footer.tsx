import { Typography } from '@ui/typography';
import { Container } from '@ui/container';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.content}>
        <Typography as="h3">Made by Aki</Typography>
      </Container>
    </footer>
  );
};
