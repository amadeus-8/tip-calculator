import React from 'react'

import styles from './TipPercents.module.scss'
import { tipPercents } from '../../utils/tipHelper'
import { Tip } from '../tip/Tip'
import { Input } from '../input/Input'
import { Grid } from '../grid/Grid'
import { useDispatch } from 'react-redux'
import { setTipPercent } from '../../redux/tipCalculatorSlice'

export const TipPercents = () => {
    const dispatch = useDispatch()

    const selectTipPercent = (value: number): void => {
        dispatch(setTipPercent({ tipPercent: value }))
    }

    return (
        <Grid gap={15} className={styles.grid}>
            {tipPercents.map((value, index) => (
                <Tip value={value} onClick={selectTipPercent} key={index} />
            ))}
            <Input id="tip" className={styles.custom} placeholder="Custom" />
        </Grid>
    )
}
