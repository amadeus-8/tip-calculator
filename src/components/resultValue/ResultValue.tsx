import React, { FC } from 'react'

import styles from './ResultValue.module.scss'

interface Props {
    name: string
    value: number
}

export const ResultValue: FC<Props> = ({ name, value }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.titleWrapper}>
                <div className={styles.title}>{name}</div>
                <div className={styles.description}>/ person</div>
            </div>
            <div className={styles.value}>${value.toFixed(2)}</div>
        </div>
    )
}
