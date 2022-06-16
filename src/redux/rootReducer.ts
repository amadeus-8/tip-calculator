import tipCalculator from './tipCalculatorSlice'
import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({ tipCalculator })

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
