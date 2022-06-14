import React from 'react'

import styles from './Calculator.module.scss'

import Logo from '../../assets/images/logo.svg'
import { Card } from '../card/Card'
import { Grid } from '../grid/Grid'
import { CalculatorInput } from '../calculatorInput/CalculatorInput'
import { Result } from '../result/Result'

export const Calculator = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                <img src={Logo} alt="logo" />
            </div>
            <Card shadow>
                <Grid gap={30} autoflow="column">
                    <CalculatorInput />
                    <Result />
                </Grid>
            </Card>
        </div>
    )
}
