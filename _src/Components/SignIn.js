import React, { Component } from 'react'
import '../Pages/LandingPage/Landing.css'
import {AiFillEyeInvisible} from 'react-icons/ai'
import {AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Typography, Button, TextField } from '@material-ui/core'
import { CiMail } from 'react-icons/ci'

export class SignIn extends Component {
  state = {
    step : 1,
    email : "",
    password : "",
    showPassword : false
  }

  nextStep = () => {
    const {step} = this.state
    this.setState({
      step : step + 1
    })
  }

  previousStep = () => {
    const {step}=this.state;
    this.setState({
      step : step - 1
    })
  }

  clickShowPassword = () => {
    const {showPassword} = this.state
    this.setState({
      showPassword: !showPassword
    })
  }

  render() {
    const {step, email, password, showPassword} = this.state
    const {changetoSignUp} = this.props
    
    switch(step) {
      case 1 :
        return (
          <div className="first">
            <div className="head">
              <h2>Welcome Back</h2>
            </div>
            <div className="emailbtn">
                <CiMail/>
                <Button onClick={this.nextStep} >Sign in with email</Button>
            </div>
            <Typography className='h6' variant='h6'>No Account? <span onClick={changetoSignUp}>Create One</span></Typography>
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
                onChange={(e) => this.setState({
                  email : e.target.value
                })}
                />
              </div>
              </div>
              <div className="btn">
                <Button color='primary' onClick={this.nextStep}>Continue</Button>
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
                  onChange={(e) => this.setState({
                    password : e.target.value
                  })}
                  />
                  <span className='icon-eye' onClick={this.clickShowPassword}>
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
}

export default SignIn
