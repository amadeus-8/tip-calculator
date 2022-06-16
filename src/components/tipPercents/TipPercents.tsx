import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import styles from './TipPercents.module.scss'

import { tipPercents } from '../../utils/tipHelper'
import { Tip } from '../tip/Tip'
import { Input } from '../input/Input'
import { Grid } from '../grid/Grid'
import { setTipPercent } from '../../redux/tipCalculatorSlice'

export const TipPercents = () => {
    const dispatch = useDispatch()

    const selectTipPercent = useCallback((value: number): void => {
        dispatch(setTipPercent({ tipPercent: value }))
    }, [])

    return (
        <Grid gap={15} className={styles.grid}>
            {tipPercents.map((value, index) => (
                <Tip value={value} onClick={selectTipPercent} key={index} />
            ))}
            <Input id="tip" className={styles.custom} placeholder="Custom" />
        </Grid>
    )
}
