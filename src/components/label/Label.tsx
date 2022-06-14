import React, { FC } from 'react'

import styles from './Label.module.scss'

interface Props {
    id: string
    label: string
}

export const Label: FC<Props> = ({ id, label }) => {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
        </div>
    )
}
