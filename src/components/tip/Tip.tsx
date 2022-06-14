import React, { FC } from 'react'

import styles from './Tip.module.scss'

interface Props {
    value: number
}

export const Tip: FC<Props> = ({ value }) => {
    return <div className={styles.wrapper}>{value}%</div>
}
