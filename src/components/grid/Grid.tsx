import React, { FC, ReactNode } from 'react'
import clsx from 'clsx'

import styles from './Grid.module.scss'

interface Props {
    children: ReactNode
    cols?: number
    rows?: number
    gap?: number
    autoflow?: 'initial' | 'column' | 'row'
    autocolumns?: 'min-content' | 'max-content'
}

export const Grid: FC<Props> = ({
    children,
    cols = 0,
    rows = 0,
    gap = 24,
    autoflow = 'initial',
    autocolumns = '',
}) => {
    const gridTemplateRows = `repeat(${rows}, minmax(0, 1fr))`
    const gridTemplateColumns = `repeat(${cols}, minmax(0, 1fr))`

    return (
        <div
            className={clsx(
                styles.wrapper,
                styles[autoflow],
                styles[autocolumns]
            )}
            style={{
                gridGap: `${gap}px`,
                gridTemplateColumns,
                gridTemplateRows,
            }}
        >
            {children}
        </div>
    )
}
