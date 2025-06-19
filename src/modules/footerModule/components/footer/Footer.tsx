import { Typography } from '@ui/typography';
import { Container } from '@ui/container';
import { useTranslation } from 'react-i18next';
import { footer } from '@utils/constants/constants';

import styles from './Footer.module.scss';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <Container className={styles.content}>
        {footer.map(({ label }) => (
          <Typography as="h3" key={label}>
            {t(label)}
          </Typography>
        ))}
      </Container>
    </footer>
  );
};
