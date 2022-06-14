import React, { FC, ReactNode } from 'react'

import styles from './Card.module.scss'
import clsx from 'clsx'

interface Props {
    children: ReactNode
    color?: 'white' | 'cyan'
    shadow?: boolean
}

export const Card: FC<Props> = ({
    children,
    color = 'white',
    shadow = false,
}) => {
    return (
        <div
            className={clsx(styles.wrapper, styles[color], {
                [styles.shadow]: shadow,
            })}
        >
            {children}
        </div>
    )
}
