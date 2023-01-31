import { configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import globalReducer from './global'
import storgeReducer from './storge'


const persistedReducer = persistReducer({
    key: 'ye-Secret',
    version: 1,
    storage
}, storgeReducer)

export const store = configureStore({
    reducer: {
        global: globalReducer,
        persist: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: true
})
// 从存储本身推断`RootState`和`AppDispatch`类型
export type RootState = ReturnType<typeof store.getState>
// 推断类型：{帖子：PostsState，评论：CommentsState，用户：UsersState}
export type AppDispatch = typeof store.dispatch