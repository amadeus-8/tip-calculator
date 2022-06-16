import React, { ChangeEvent, FC } from 'react'
import { useDispatch } from 'react-redux'
import clsx from 'clsx'

import styles from './Input.module.scss'

import {
    setBill,
    setNumberOfPeople,
    setTipPercent,
} from '../../redux/tipCalculatorSlice'

interface Props {
    id: string
    icon?: string
    value?: number
    placeholder?: string
    className?: string
}

export const Input: FC<Props> = ({
    id,
    icon,
    value,
    placeholder = '',
    className,
}) => {
    const dispatch = useDispatch()

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        switch (e.target.id) {
            case 'bill':
                dispatch(setBill({ bill: parseFloat(e.target.value) }))
                break
            case 'person':
                dispatch(
                    setNumberOfPeople({
                        numberOfPeople: parseFloat(e.target.value),
                    })
                )
                break
            case 'tip':
                dispatch(
                    setTipPercent({
                        tipPercent: parseFloat(e.target.value),
                    })
                )
                break
            default:
                break
        }
    }

    return (
        <div className={styles.wrapper}>
            <input
                id={id}
                className={clsx(styles.input, className)}
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
            />
            {icon && <img className={styles.icon} src={icon} alt="icon" />}
        </div>
    )
}
