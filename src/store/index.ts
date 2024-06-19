import { configureStore } from '@reduxjs/toolkit'
import appReducer from './modules/app'
import UserReducer from './modules/user'

const store = configureStore({
    reducer: {
        appStore: appReducer,
        userStore: UserReducer
    }
})

export default store