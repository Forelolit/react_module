import type { FC } from 'react'
import clsx from 'clsx'
import { capitalize } from '@utils/capitalize'

import styles from './Typography.module.scss'
import { tagMap, type TypographyProps } from './types'

export const Typography: FC<TypographyProps> = ({
  children,
  as = 'p',
  className = '',
  size,
  color = 'text',
}) => {
  const Element = tagMap[as || 'p']

  return (
    <Element
      className={clsx(
        className,
        styles.base,
        size && styles[`size${capitalize(size)}`],
        styles[`as${capitalize(as)}`],
        styles[`color${capitalize(color)}`],
      )}
    >
      {children}
    </Element>
  )
}
