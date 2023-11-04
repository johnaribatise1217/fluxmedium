import { createSlice } from '@reduxjs/toolkit'
import { AuthService } from './authService'
const _cachedUser =   sessionStorage.getItem('user')

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    view: null,
    user: _cachedUser? JSON.parse(_cachedUser): null,
    isSubmitting: false
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
    setSubmitting: (state, action) => {
      state.isSubmitting = action.payload
    },
    _logout: async(state) =>{
      const authService = new AuthService()
      state.isSubmitting = true
      const _cachedJwt =   sessionStorage.getItem('jwt')
      if(_cachedJwt){
        // user not loggedIn 
        state.isSubmitting = false
        return 
      }
      await authService.logout(_cachedJwt)
      state.isSubmitting = false
      state.user = null
      sessionStorage.removeItem('jwt')
      sessionStorage.removeItem('user')
    },
    _login: (state, action) => {
      state.isSubmitting = false
      state.user = action.payload.user
      sessionStorage.setItem('jwt',  action.payload.jwt)
      sessionStorage.setItem('user', JSON.stringify(action.payload.user))
    }
  },
})

// Action creators are generated for each case reducer function
export const { openSignInView, openSignUpView, closeView, setSubmitting, _login, _logout } = authSlice.actions
/**
 * 
 * @param {*} payload 
 * @param {import('react-router-dom').NavigateFunction} navigate 
 * @returns 
 */
export const login = (payload, navigate ) => async (dispatch, getState)=> {
  const state = getState().auth
  if(state.isSubmitting) return
  dispatch(setSubmitting(true))
  const authService = new AuthService()
  const result = await authService.login(payload)
  if(result.notOk){
    // TODO: add a snackbar to show message
    if(result.message) alert(result.message)
    state.isSubmitting = false
    return 
  }
  dispatch(_login(result.result))
  navigate('/medium')
}

export default authSlice.reducer