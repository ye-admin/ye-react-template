import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface StateType {
    token: string
}

const initialState: StateType = {
    token: '',
}
export const storgeSlice = createSlice({
    name: 'storge',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        }
    },
})

// 自动生成action
export const {
    setToken
} = storgeSlice.actions

export default storgeSlice.reducer