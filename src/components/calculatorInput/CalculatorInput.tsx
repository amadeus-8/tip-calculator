import React from 'react'

import styles from './CalculatorInput.module.scss'

import DollarIcon from '../../assets/icons/icon-dollar.svg'
import PersonIcon from '../../assets/icons/icon-person.svg'
import { Group } from '../group/Group'
import { Label } from '../label/Label'
import { Input } from '../input/Input'
import { TipPercents } from '../tipPercents/TipPercents'
import { useSelector } from 'react-redux'
import { tipCalculatorSelector } from '../../redux/tipCalculatorSlice'

export const CalculatorInput = () => {
    const { bill, numberOfPeople } = useSelector(tipCalculatorSelector)

    return (
        <div className={styles.wrapper}>
            <Group mb={30}>
                <Label id="bill" label="Bill" />
                <Input
                    id="bill"
                    icon={DollarIcon}
                    value={bill ? bill : ''}
                    placeholder="0"
                />
            </Group>
            <Group>
                <Label id="tip" label="Select tip %" />
                <TipPercents />
            </Group>
            <Group mt={30}>
                <div className={styles.personTitleWrapper}>
                    <Label id="person" label="Number of people" />
                    {(numberOfPeople < 1 || !numberOfPeople) && (
                        <div className={styles.error}>Can&apos;t be zero</div>
                    )}
                </div>
                <Input
                    id="person"
                    icon={PersonIcon}
                    value={numberOfPeople ? numberOfPeople : ''}
                    className={
                        numberOfPeople < 1 || !numberOfPeople
                            ? styles.error
                            : ''
                    }
                    placeholder="0"
                />
            </Group>
        </div>
    )
}
