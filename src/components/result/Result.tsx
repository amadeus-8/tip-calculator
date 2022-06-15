import React from 'react'

import styles from './Result.module.scss'

import { Card } from '../card/Card'
import { ResultValue } from '../resultValue/ResultValue'
import { Reset } from '../reset/Reset'
import { Group } from '../group/Group'

export const Result = () => {
    return (
        <Card color="cyan" className={styles.wrapper}>
            <Group className={styles.results}>
                <ResultValue name="Tip Amount" value={0} />
                <ResultValue name="Total" value={0} />
            </Group>
            <Reset />
        </Card>
    )
}
