import React, { FC, ReactNode } from 'react'

import styles from './Card.module.scss'
import clsx from 'clsx'

interface Props {
    children: ReactNode
    color?: 'white' | 'cyan'
}

export const Card: FC<Props> = ({ children, color = 'white' }) => {
    return <div className={clsx(styles.wrapper, styles[color])}>{children}</div>
}
