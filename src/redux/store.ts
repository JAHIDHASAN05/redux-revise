import { configureStore } from "@reduxjs/toolkit";
import CounterReducers from './feature/CreateSlice'

export const store= configureStore ({
    reducer:{
     counter: CounterReducers
    }
})