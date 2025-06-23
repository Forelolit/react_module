import { useState } from 'react';
import clsx from 'clsx';
import { capitalize } from '@utils/strings/capitalize';

import type { CustomInputProps } from '../types/types';

import styles from './CustomInput.module.scss';

export const CustomInput = ({
  type,
  cursor = 'pointer',
  className = '',
  ...rest
}: CustomInputProps) => {
  const [value, setValue] = useState('');

  return (
    <input
      type={type}
      className={clsx(className, styles.base, styles[`cursor${capitalize(cursor)}`])}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...rest}
    />
  );
};
