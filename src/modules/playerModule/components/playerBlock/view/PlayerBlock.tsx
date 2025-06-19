import ReactPlayer from 'react-player';
import { Typography } from '@ui/index';

import styles from './PlayerBlock.module.scss';

export const PlayerBlock = () => {
  return (
    <div className={styles.playerBlock}>
      <div>
        <Typography as="h1" className={styles.title}>
          React player
        </Typography>
        <div className={styles.playerWrapper}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=-afmD1rsXE4"
            width="100%"
            height="100%"
            controls
          />
        </div>
      </div>
    </div>
  );
};
