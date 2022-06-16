import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './rootReducer'

interface InitialState {
    bill: number
    tipPercent: number
    numberOfPeople: number
    tipAmount: number
    total: number
}

const initialState: InitialState = {
    bill: 0,
    tipPercent: 5,
    numberOfPeople: 1,
    tipAmount: 0,
    total: 0,
}

const tipCalculatorSlice = createSlice({
    name: 'tipCalculator',
    initialState,
    reducers: {
        setTipPercent(state, action) {
            state.tipPercent = action.payload.tipPercent
        },
        setBill(state, action) {
            state.bill = action.payload.bill
        },
        setNumberOfPeople(state, action) {
            state.numberOfPeople = action.payload.numberOfPeople
        },
        calculateTipAmount(state) {
            state.tipAmount =
                ((state.tipPercent / 100) * state.bill) / state.numberOfPeople
        },
        calculateTotal(state) {
            state.total = state.bill / state.numberOfPeople + state.tipAmount
        },
        resetValues: () => initialState,
    },
})

export const {
    setTipPercent,
    setBill,
    setNumberOfPeople,
    calculateTipAmount,
    calculateTotal,
    resetValues,
} = tipCalculatorSlice.actions

export const tipCalculatorSelector = (state: RootState): InitialState =>
    state.tipCalculator

export default tipCalculatorSlice.reducer
