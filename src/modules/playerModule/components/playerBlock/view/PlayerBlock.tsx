import ReactPlayer from 'react-player/youtube';
import { Typography } from '@ui/index';

import styles from './PlayerBlock.module.scss';

export const PlayerBlock = () => {
  const video = 'https://www.youtube.com/watch?v=FoSgDtqb0Zc';

  return (
    <div className={styles.playerBlock}>
      <div>
        <Typography as="h1" className={styles.title}>
          React player
        </Typography>
        <div className={styles.playerWrapper}>
          <ReactPlayer url={video} width="80%" height="80%" controls light />
        </div>
      </div>
    </div>
  );
};
