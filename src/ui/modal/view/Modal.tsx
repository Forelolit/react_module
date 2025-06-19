import type { FC } from 'react';
import { CustomButton } from '@ui/button';
import { Typography } from '@ui/typography';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import { buttonTexts } from '@utils/constants/constants';

import type { ModalProps } from '../types/types';

import styles from './Modal.module.scss';

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const { t } = useTranslation();

  const button = buttonTexts[0];

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <CustomButton variant="outline" onClick={onClose}>
          <Typography>{t(button.close)}</Typography>
        </CustomButton>
        {children}
      </div>
      <div className={styles.modalOverlay} onClick={onClose} />
    </div>,
    document.body,
  );
};
