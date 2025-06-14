import { Typography } from '@ui/typography';

import links from '../json/links.json';

import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Typography as="ulList" listStyle="none" className={styles.list}>
        {links.map((link) => (
          <Typography as="list_item" key={link} size="medium">
            <a href="#" className={styles.link}>
              {link}
            </a>
          </Typography>
        ))}
      </Typography>
    </nav>
  );
};
