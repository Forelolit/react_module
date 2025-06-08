import { useState } from 'react';

import styles from './CustomInput.module.scss';
import type { CustomInputProps } from './types';

export const CustomInput = ({ type }: CustomInputProps) => {
  const [value, setValue] = useState('');

  return (
    <input
      type={type}
      className={`${styles.base}`}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
