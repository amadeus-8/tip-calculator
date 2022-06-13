import React from 'react'

import styles from './Calculator.module.scss'

import { Card } from '../card/Card'
import Logo from '../../assets/images/logo.svg'

export const Calculator = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                <img src={Logo} alt="logo" />
            </div>
            <Card>asd</Card>
        </div>
    )
}
