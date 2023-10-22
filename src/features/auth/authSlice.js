import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    view: null,
  },
  reducers: {
    openSignUpView: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.view = 'SIGNUP'
    },
    openSignInView: (state) => {
      state.view = 'SIGNIN'
    },
    closeView: (state) => {
      state.view = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { openSignInView, openSignUpView, closeView } = authSlice.actions

export default authSlice.reducer