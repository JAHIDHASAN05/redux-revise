import { createSlice } from '@reduxjs/toolkit'


const initialState={
    value:0
}
export const counterSlice = createSlice({ 
    name:'counter',
    initialState,
    reducers:{
        increament:(state, )=>{
            state.value= state.value+1            
        },
        decreament:(state, )=>{
            state.value-=1
        },
        decreamentByValue:(state,action )=>{
            state.value-=action.payload.jahid 
        }
    }
   
})

export const {increament, decreament,decreamentByValue}= counterSlice.actions;
export default counterSlice.reducer;