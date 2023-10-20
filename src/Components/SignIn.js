import React, { useState } from 'react'
import '../Pages/LandingPage/Landing.css'
import {AiFillEyeInvisible} from 'react-icons/ai'
import {AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Typography, Button, TextField } from '@material-ui/core'
import { CiMail } from 'react-icons/ci'
import { useDispatch } from 'react-redux'
import { openSignUpView } from '../features/auth/authSlice'

export const  SignIn  = ()=> {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const [state, setState] = useState({
    step : 1,
    email : "",
    password : "",
    showPassword : false
  })

  const nextStep = () => {
    setState((state)=>({
      ...state,
      step : state.step + 1
    }))
  }

  const previousStep = () => {
    setState((state)=>({
      ...state,
      step : state.step - 1
    }))
  }

  const clickShowPassword = () => {
    setState((state)=>({
      ...state,
      showPassword: !state.showPassword
    }))
  }

  
    // const counter = this.props.counter.value
    const {step, showPassword} = state
    // eslint-disable-next-line default-case
    switch(step) {
      case 1 :
        return (
          <div className="first">
            <div className="head">
              <h2>Welcome Back</h2>
            </div>
            <div className="emailbtn">
                <CiMail/>
                <Button onClick={nextStep} >Sign in with email</Button>
            </div>
            <Typography className='h6' variant='h6'>No Account? <span onClick={()=> dispatch(openSignUpView())}>Create One</span></Typography>
            <Typography className='text'>Click "Sign In" to agree to FluxMedium's <span>Terms of Service</span> and acknowledge that FluxMedium's <span>Privacy Policy</span> applies to you.</Typography>
            </div>
        )
      case 2 : 
        return (
          <div className="first">
            <Typography variant='h4'>Sign in with email</Typography>
            <div className="below">
              <small>Your email</small>
              <div className="textfield">
                <TextField required id="standard-required" label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              </div>
              <div className="btn">
                <Button color='primary' onClick={nextStep}>Continue</Button>
              </div>
          </div>
        )
      case 3 : 
        return (
          <div className="first">
            <div className="below">
                <h3>Enter Your password</h3>
                <div className="textfield">
                  <TextField id="standard-password-input" label="Password"
                  type={`${showPassword ? "text" : "password"}`}
                  autoComplete='current-password'
                  value={password}
                  onChange={(e) => setPassword({
                    password : e.target.value
                  })}
                  />
                  <span className='icon-eye' onClick={clickShowPassword}>
                      {showPassword ? 
                        <AiFillEye/>
                        :
                        <AiFillEyeInvisible/>
                      }
                  </span>
                </div>
                <div className="btn">
                  <Link to='/medium'>
                    <Button color='primary'>Sign In</Button>
                  </Link>
                </div>
            </div>
          </div>
        )
    }
}

export default SignIn
