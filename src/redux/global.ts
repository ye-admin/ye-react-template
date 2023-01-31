import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

interface StateType {
    value: number
}

const initialState: StateType = {
    value: 0,
}
const promise_one: Promise<number> = new Promise((res, _rej) => {
    setTimeout(() => {
        res(10)
    }, 3000)
})
// 异步Action
export const getAsyncInfo = createAsyncThunk("getAsyncInfo", async () => {
    return await promise_one
})
export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        add: (state) => {
            // Redux工具包允许我们在减法器中编写“变异”逻辑。它
            //实际上不会改变状态，因为它使用了Immer库，
            //它检测“草稿状态”的变化并生成一个全新的
            //基于这些更改的不可变状态
            state.value += 1
        },
        jian: (state) => {
            state.value -= 1
        },
        addValue: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
    extraReducers(builder) {
        builder.addCase(getAsyncInfo.pending, () => {
            // console.log("进行中")
        })
        builder.addCase(getAsyncInfo.fulfilled, (state, action) => {
            // console.log("action.payload: ", action.payload) //{number:"10"}
            state.value += action.payload
            // console.log("成功")
        })
        builder.addCase(getAsyncInfo.rejected, () => {
            // console.log("失败")
        })
    },
})

// 自动生成action
export const { add, jian, addValue } = globalSlice.actions

export default globalSlice.reducer