import {configureStore} from '@reduxjs/toolkit'
import loginSlice from './loginSlice'
import registerSlice from './registerSlice'
const store = configureStore({
    reducer:{
        log:loginSlice,
        reg:registerSlice,
    }
})
export default store