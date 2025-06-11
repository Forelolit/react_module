import { CustomButton } from '@ui/button';
import { Typography } from '@ui/typography';

import sound from '../audio/sound.mp3';
import image from '../image/image1.jpg';

import styles from './HeroBlock.module.scss';

export const HeroBlock = () => {
  let isPlaying = false;

  const playSound = () => {
    if (isPlaying) return;

    const audio = new Audio(sound);
    isPlaying = true;

    audio.play().catch((err) => {
      console.error('Ошибка воспроизведения аудио:', err);
      isPlaying = false;
    });

    audio.addEventListener('ended', () => {
      isPlaying = false;
    });
  };

  return (
    <div className={styles.heroBlock}>
      <div className={styles.textBlock}>
        <Typography as="h1">Hero block</Typography>
        <Typography as="h2">This is hero block</Typography>
        <CustomButton onClick={playSound} variant="accent">
          <Typography color="white">Click me 😊</Typography>
        </CustomButton>
      </div>
      <div className={styles.imageWrapper}>
        <img src={image} alt="image" className={styles.image} />
      </div>
    </div>
  );
};
