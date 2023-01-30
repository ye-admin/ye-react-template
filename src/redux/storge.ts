import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface StateType {
    value: number
}

const initialState: StateType = {
    value: 0,
}
export const storgeSlice = createSlice({
    name: 'storge',
    initialState,
    reducers: {
        add: (state) => {
            state.value += 1
        },
        jian: (state) => {
            state.value -= 1
        },
        addValue: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
})

// 自动生成action
export const { add, jian, addValue } = storgeSlice.actions

export default storgeSlice.reducer