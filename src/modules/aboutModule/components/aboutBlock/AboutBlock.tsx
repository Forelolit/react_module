import { Typography } from '@ui/index';

import styles from './AboutBlock.module.scss';

export const AboutBlock = () => {
  return (
    <div className={styles.aboutBlock}>
      <Typography as="h1" className={styles.title}>
        About page
      </Typography>
      <Typography>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At labore illum eos numquam vel,
        iure itaque nisi doloremque maiores eaque. Aliquid iure possimus error obcaecati iste earum
        saepe velit magnam.
      </Typography>
    </div>
  );
};
