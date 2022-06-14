import React from 'react'

import styles from './CalculatorInput.module.scss'

import DollarIcon from '../../assets/icons/icon-dollar.svg'

export const CalculatorInput = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.labelWrapper}>
                <label className={styles.label} htmlFor="">
                    Bill
                </label>
            </div>
            <div className={styles.inputWrapper}>
                <input className={styles.input} type="text" placeholder="0.0" />
                <img
                    className={styles.dollarIcon}
                    src={DollarIcon}
                    alt="dollar-icon"
                />
            </div>
        </div>
    )
}
