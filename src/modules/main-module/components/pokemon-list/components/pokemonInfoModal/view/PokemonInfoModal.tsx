import type { FC } from 'react';
import { CustomButton } from '@ui/button';
import { Typography } from '@ui/typography';
import ReactDOM from 'react-dom';

import type { PokemonInfoModalProps } from '../types/types';

import styles from './pokemonInfoModal.module.scss';

export const PokemonInfoModal: FC<PokemonInfoModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <CustomButton variant="outline" onClick={onClose}>
          <Typography>Close</Typography>
        </CustomButton>
        {children}
      </div>
      <div className={styles.modalOverlay} onClick={onClose} />
    </div>,
    document.body,
  );
};
