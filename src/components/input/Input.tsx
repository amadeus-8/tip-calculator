import React, { FC } from 'react'

import styles from './Input.module.scss'

interface Props {
    id: string
    icon?: string
}

export const Input: FC<Props> = ({ id, icon }) => {
    return (
        <div className={styles.wrapper}>
            <input
                id={id}
                className={styles.input}
                type="text"
                placeholder="0"
            />
            <img className={styles.icon} src={icon} alt="icon" />
        </div>
    )
}
