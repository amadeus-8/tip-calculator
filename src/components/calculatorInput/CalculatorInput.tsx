import React from 'react'

import styles from './CalculatorInput.module.scss'

import DollarIcon from '../../assets/icons/icon-dollar.svg'
import PersonIcon from '../../assets/icons/icon-person.svg'
import { Tip } from '../tip/Tip'
import { Grid } from '../grid/Grid'
import { Group } from '../group/Group'
import { Label } from '../label/Label'
import { Input } from '../input/Input'

export const CalculatorInput = () => {
    return (
        <div className={styles.wrapper}>
            <Group mb={30}>
                <Label id="bill" label="Bill" />
                <Input id="bill" icon={DollarIcon} />
            </Group>
            <Group>
                <Label id="tip" label="Select tip %" />
                <Grid gap={15} className={styles.grid}>
                    {[...Array(5)].map((_, index) => (
                        <Tip value={15} key={index} />
                    ))}
                    <input
                        type="text"
                        className={styles.custom}
                        placeholder="Custom"
                    />
                </Grid>
            </Group>
            <Group mt={30}>
                <Label id="person" label="Number of people" />
                <Input id="person" icon={PersonIcon} />
            </Group>
        </div>
    )
}
