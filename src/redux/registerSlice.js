import {createSlice} from '@reduxjs/toolkit'

const registerSlice = createSlice({
    name:"register",
    initialState:{
        regdata:{
            fullName:"",
            userName:"",
            email:"",
            phone:"",
            password:""
        }
    },
    reducers:{
        setRegData:(state,action)=>
        {
            state.regdata = action.payload
        }
    }
})

export default registerSlice.reducer
export const {setRegData} = registerSlice.actions