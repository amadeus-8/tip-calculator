import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Result.module.scss'

import { Card } from '../card/Card'
import { ResultValue } from '../resultValue/ResultValue'
import { Reset } from '../reset/Reset'
import { Group } from '../group/Group'
import {
    calculateTipAmount,
    calculateTotal,
    tipCalculatorSelector,
} from '../../redux/tipCalculatorSlice'

export const Result = () => {
    const { total, tipAmount, bill, numberOfPeople, tipPercent } = useSelector(
        tipCalculatorSelector
    )
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(calculateTipAmount())
        dispatch(calculateTotal())
    }, [bill, numberOfPeople, tipPercent])

    return (
        <Card color="cyan" className={styles.wrapper}>
            <Group className={styles.results}>
                <ResultValue name="Tip Amount" value={tipAmount} />
                <ResultValue name="Total" value={total} />
            </Group>
            <Reset />
        </Card>
    )
}
