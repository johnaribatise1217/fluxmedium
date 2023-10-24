import { Button, TextField, Typography } from '@material-ui/core'
import React, {useState} from 'react'
import {CiMail} from 'react-icons/ci'
import '../Pages/LandingPage/Landing.css'
import {AiFillEyeInvisible} from 'react-icons/ai'
import {AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { openSignInView, closeView } from '../features/auth/authSlice'

export const Signup = () => {
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
        setState((state) => ({
            ...state, 
            step : state.step + 1
        }))
    }

    const clickShowPassword = () => {
        setState((state) => ({
            ...state,
            showPassword: !state.showPassword
        }))
    }

    const {step, showPassword} = state

    switch(step) {
        case 1:
            return (
                <div className='first'>
                    <div className="head">
                        <h2>Join FluxMedium</h2>
                    </div>
                    <div className="emailbtn">
                        <CiMail/>
                        <Button onClick={nextStep}>Sign up with email</Button>
                    </div>
                    <Typography className='h6' variant='h6'>Already have an account? <span onClick={() => 
                        dispatch(openSignInView())
                    }>Sign in</span></Typography>
                    <Typography className='text'>Click "Sign Up" to agree to FluxMedium's <span>Terms of Service</span> and acknowledge that FluxMedium's <span>Privacy Policy</span> applies to you.</Typography>
                </div>
            )
        case 2 : 
            return (
                <div className="first">
                    <Typography variant='h4'>Sign up with email</Typography>
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
                            onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className='icon-eye'
                                onClick={clickShowPassword}
                            >
                                {showPassword ? 
                                    <AiFillEye/>
                                    :
                                    <AiFillEyeInvisible/>
                                }
                            </span>
                        </div>
                        <div className="btn">
                            <Link to='/' onClick={() => dispatch(closeView())}>
                                <Button color='primary'>Sign Up</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )
    }
}

export default Signup
