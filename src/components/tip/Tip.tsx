import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import clsx from 'clsx'

import styles from './Tip.module.scss'

import { tipCalculatorSelector } from '../../redux/tipCalculatorSlice'

interface Props {
    value: number
    onClick: (value: number) => void
}

export const Tip: FC<Props> = ({ value, onClick }) => {
    const { tipPercent } = useSelector(tipCalculatorSelector)

    return (
        <div
            className={clsx(styles.wrapper, {
                [styles.selected]: tipPercent === value,
            })}
            onClick={() => onClick(value)}
        >
            {value}%
        </div>
    )
}
