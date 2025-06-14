import { Typography } from '@ui/typography';
import { CustomInput } from '@ui/input';
import { CustomButton } from '@ui/button';

import image from '../image/image.jpg';

import styles from './MainBlock.module.scss';

export const MainBlock = () => {
  return (
    <div className={styles.mainBlock}>
      <div className={styles.mainContent}>
        <div className={styles.titleBlock}>
          <Typography as="h2" className={styles.title}>
            This is main block
          </Typography>
          <CustomButton variant="outline">
            <Typography>Button</Typography>
          </CustomButton>
        </div>
        <div className={styles.imageWrapper}>
          <img src={image} alt="image" />
        </div>
      </div>
      <div className={styles.contactsBlock}>
        <Typography className={styles.contactsText} size="subtle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim earum voluptatum tenetur
          vitae maiores laudantium sed sunt adipisci magni, eos assumenda sapiente cumque vel
          architecto? Eaque soluta quisquam voluptate unde?
        </Typography>

        <div className={styles.emailContent}>
          <Typography as="h2" className={styles.title}>
            Connect your email to know the latest news
          </Typography>
          <div className={styles.input}>
            <CustomInput type="text" placeholder="Enter Email" />
            <CustomButton type="submit">
              <Typography color="white" size="medium">
                Contact us
              </Typography>
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};
