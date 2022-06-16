import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import clsx from 'clsx'

import styles from './Reset.module.scss'

import {
    resetValues,
    tipCalculatorSelector,
} from '../../redux/tipCalculatorSlice'

export const Reset = () => {
    const dispatch = useDispatch()
    const { tipAmount, total } = useSelector(tipCalculatorSelector)

    return (
        <div
            className={clsx(styles.wrapper, {
                [styles.disabled]: tipAmount === 0 && total === 0,
            })}
            onClick={() => dispatch(resetValues())}
        >
            Reset
        </div>
    )
}
