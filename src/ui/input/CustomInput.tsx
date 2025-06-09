import { useState } from 'react';
import clsx from 'clsx';

import styles from './CustomInput.module.scss';
import type { CustomInputProps } from './types';

export const CustomInput = ({
  type,
  placeholder,
  disabled,
  cursor,
}: CustomInputProps) => {
  const [value, setValue] = useState('');

  return (
    <input
      type={type}
      className={clsx(styles.base, styles[`cursor-${cursor}`])}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};
