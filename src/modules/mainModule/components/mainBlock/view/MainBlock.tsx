import { Typography, CustomInput, CustomButton, CustomImage } from '@ui/index';
import image from '@assets/svg/image2.svg';
import { useTranslation } from 'react-i18next';
import { buttonTexts, mainBlockTexts, placeholders } from '@utils/constants/constants';

import styles from './MainBlock.module.scss';

export const MainBlock = () => {
  const { t } = useTranslation();
  const text = mainBlockTexts[0];
  const button = buttonTexts[0];
  const placeholder = placeholders[0];

  return (
    <div className={styles.mainBlock}>
      <div className={styles.content}>
        <div className={styles.titleBlock}>
          <Typography as="h2" className={styles.title}>
            {t(text.title0)}
          </Typography>
          <CustomButton variant="outline">
            <Typography>{t(button.info)}</Typography>
          </CustomButton>
        </div>
        <div className={styles.imageWrapper}>
          <CustomImage src={image} alt="image" />
        </div>
      </div>
      <div className={styles.contactsBlock}>
        <Typography className={styles.contactsText} size="subtle">
          {t(text.description)}
        </Typography>

        <div className={styles.emailContent}>
          <Typography as="h2" className={styles.title}>
            {t(text.title1)}
          </Typography>
          <div className={styles.input}>
            <CustomInput type="text" placeholder={t(placeholder.enterEmail)} />
            <CustomButton type="submit">
              <Typography color="white" size="medium">
                {t(button.contactUs)}
              </Typography>
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};
