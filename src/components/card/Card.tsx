import React, { FC, ReactNode } from 'react'
import clsx from 'clsx'

import styles from './Card.module.scss'

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
