import React, { FC, ReactNode } from 'react'

import styles from './Card.module.scss'
import clsx from 'clsx'

interface Props {
    children: ReactNode
    color?: 'white' | 'cyan'
    shadowed?: boolean
    className?: string
}

export const Card: FC<Props> = ({
    children,
    color = 'white',
    shadowed = false,
    className,
}) => {
    return (
        <div
            className={clsx(styles.wrapper, styles[color], className, {
                [styles.shadowed]: shadowed,
            })}
        >
            {children}
        </div>
    )
}
