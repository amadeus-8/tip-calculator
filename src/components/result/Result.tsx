import React from 'react'

import styles from './Result.module.scss'

import { Card } from '../card/Card'
import { ResultValue } from '../resultValue/ResultValue'
import { Reset } from '../reset/Reset'

export const Result = () => {
    return (
        <Card color="cyan">
            <ResultValue name="Tip Amount" value={0} />
            <ResultValue name="Total" value={0} />
            <Reset />
        </Card>
    )
}
