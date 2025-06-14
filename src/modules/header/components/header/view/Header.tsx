import { Typography } from '@ui/typography';
import { Container } from '@ui/container';
import { CustomInput } from '@ui/input';

import { Navbar } from '../../navbar/view/Navbar';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.content}>
        <Typography as="h3">Logo</Typography>
        <CustomInput type="text" placeholder="Search" />
        <Navbar />
      </Container>
    </header>
  );
};
