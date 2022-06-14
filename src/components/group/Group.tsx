import React, { FC, ReactNode } from 'react'

import styles from './Group.module.scss'

interface Props {
    children: ReactNode
    className?: string
    mt?: number
    mb?: number
}

export const Group: FC<Props> = ({ children, className, mt, mb }) => {
    return (
        <div
            className={className}
            style={{ marginTop: `${mt}px`, marginBottom: `${mb}px` }}
        >
            {children}
        </div>
    )
}
