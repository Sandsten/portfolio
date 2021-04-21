import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '';

/*
  THIS IS A THUNK / ASYNC ACTION

  When redux accept functions as actions instead of objects, the functions are refered to as thunks
*/
// Called two times?
// Once when the action is dispatched
export const signIn = createAsyncThunk(
  'account/signIn',
  async (username, password) => {
    return axios.post(`${URL}/sign-in`,
      {
        username,
        password,
      },
      { withCredentials: true }
    )
  }
)

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    signedIn: null,
    status: null
  },
  extraReducers: {
    // Called automatically when the signIn Action is Dispatched
    [signIn.pending]: (state, action) => {
      state.status = 'loading';
    },
    // Called when the dispatched action returns without any errors
    [signIn.fulfilled]: (state, { payload }) => {
      state.signedIn = true;
      state.status = 'success';
    },
    [signIn.rejected]: (state, action) => {
      state.signedIn = 'failed';
    }
  }
})

export default accountSlice.reducer;