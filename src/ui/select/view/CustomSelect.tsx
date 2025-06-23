import { useState, type FC } from 'react';
import clsx from 'clsx';
import arrow from '@assets/svg/arrow.svg';

import type { CustomSelectProps } from '../types/types';

import styles from './CustomSelect.module.scss';

export const CustomSelect: FC<CustomSelectProps> = ({
  className = '',
  options,
  onChange,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
  };

  return (
    <div
      className={clsx(className, styles.select)}
      onClick={toggleOpen}
      role="listbox"
      tabIndex={0}
    >
      <div className={styles.flex}>
        <div className={styles.selectName}>{options.find((opt) => opt.value === value)?.label}</div>
        <div className={clsx(styles.arrow, isOpen && styles.arrowRotate)}>
          <img src={arrow} alt="svg arrow" />
        </div>
      </div>

      {isOpen && (
        <div className={styles.optionsList}>
          {options.map((opt) => (
            <div
              key={opt.value}
              className="option"
              onClick={(e) => {
                e.stopPropagation();
                handleSelect(opt.value);
              }}
              role="option"
              aria-selected={opt.value === value}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
