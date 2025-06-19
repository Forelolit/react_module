import { Typography } from '@ui/index';
import { navItems } from '@utils/constants/constants';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './Navbar.module.scss';

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className={styles.navbar}>
      <Typography as="ulList" listStyle="none" className={styles.list}>
        {navItems.map(({ label, to }) => (
          <Typography as="list_item" key={to} size="medium">
            <Link to={to}>
              <Typography as="link">{t(label)}</Typography>
            </Link>
          </Typography>
        ))}
      </Typography>
    </nav>
  );
};
