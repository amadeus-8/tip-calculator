import React from 'react'

import styles from './Result.module.scss'

import { Card } from '../card/Card'
import { ResultValue } from '../resultValue/ResultValue'

export const Result = () => {
    return (
        <Card color="cyan">
            {/*<div className={styles.output}>*/}
            {/*    <div className={styles.titleWrapper}>*/}
            {/*        <div className={styles.title}>Tip Amount</div>*/}
            {/*        <div className={styles.description}>/ person</div>*/}
            {/*    </div>*/}
            {/*    <div className={styles.value}>$0.00</div>*/}
            {/*</div>*/}
            <ResultValue name="Tip Amount" value={0} />
            <ResultValue name="Tip Amount" value={0} />
        </Card>
    )
}
