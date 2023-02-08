import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    Token: "BQDPXdyTn9IP-OtewJ_jU3DftkYHRhn4qX99tVugvwFpCAfNX4xRVtIwQO98jie7lvTzz9vvDkjJQajzW5F1EOKQ2azL5asOoDjob6r_WbDSQ0P2USUL1t6C61eVALErrqAxLEPFeGHAifLt1zeRc288pLpyEjpQ7ew7fQVwN_0xhArPCFRKLem4l0QMlXBa7vbx6YY2WeUQpu9c1BrY",
    playlist: [],
}

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUser:  (state, action) => {
      if(action.payload === undefined)
      {
        state.user = state.user; 
      }
      else{
        state.user = action.payload;
      }
    },
    setTokens:  (state, action) => {
      if(action.payload === undefined)
      {
        state.Token = state.Token; 
      }
      else{
        state.Token = action.payload;
      }
    },
    setPlaylist:  (state, action) => {
      if(action.payload === undefined)
      {
        state.playlist = state.playlist; 
      }
      else{
        state.playlist = action.payload;
      }
    },
   
    
  }
});

export const {getUser,setTokens,setPlaylist} = userSlice.actions

export default userSlice.reducer