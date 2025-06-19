import { Typography, Container, CustomInput } from '@ui/index';
import { useTranslation } from 'react-i18next';
import { placeholders } from '@utils/constants/constants';

import { Navbar } from '../../navbar/view/Navbar';
import { LanguageSwitcher } from '../../languageSwitcher/view/LanguageSwitcher';

import styles from './Header.module.scss';

export const Header = () => {
  const { t } = useTranslation();

  const text = placeholders[0];

  return (
    <header className={styles.header}>
      <Container className={styles.content}>
        <Typography as="h3">Logo</Typography>
        <CustomInput type="text" placeholder={t(text.search)} />
        <div className={styles.flex}>
          <Navbar />
          <LanguageSwitcher />
        </div>
      </Container>
    </header>
  );
};
