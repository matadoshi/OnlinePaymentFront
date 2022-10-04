import {createSlice} from '@reduxjs/toolkit'


const loginSlice = createSlice({
    name:"login",
    initialState:{
        token:JSON.parse(localStorage.getItem("Client"))
    },
    reducers:{
        setToken:(state,action)=>
        {
            state.token = action.payload
        }
    }
})

export default loginSlice.reducer;
export const {setToken} = loginSlice.actions