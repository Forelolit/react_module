import { CustomButton, CustomImage, Typography } from '@ui/index';
import image from '@assets/svg/image1.svg';
import sound from '@assets/audio/sound.mp3';
import { useTranslation } from 'react-i18next';
import { buttonTexts, heroBlockTexts } from '@utils/constants/constants';

import styles from './HeroBlock.module.scss';

export const HeroBlock = () => {
  const { t } = useTranslation();
  const text = heroBlockTexts[0];
  const button = buttonTexts[0];

  let isPlaying = false;

  const playSound = () => {
    if (isPlaying) return;

    const audio = new Audio(sound);
    isPlaying = true;

    audio.play().catch((error) => {
      console.error(error);
      isPlaying = false;
    });

    audio.addEventListener('ended', () => {
      isPlaying = false;
    });
  };

  return (
    <div className={styles.heroBlock}>
      <div className={styles.content}>
        <div>
          <Typography as="h1">{t(text.title0)}</Typography>
          <Typography as="h2">{t(text.title1)}</Typography>
          <CustomButton onClick={playSound}>
            <Typography color="white">{t(button.click)}</Typography>
          </CustomButton>
        </div>
        <div className={styles.imageWrapper}>
          <CustomImage src={image} alt="image" />
        </div>
      </div>
    </div>
  );
};
