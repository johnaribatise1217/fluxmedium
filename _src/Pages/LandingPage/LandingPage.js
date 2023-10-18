import React, { useState } from 'react'
import './Landing.css'
import { Container,Typography , Button, Modal, Paper, Fade, Backdrop} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Signup from '../../Components/Signup';
import SignIn from '../../Components/SignIn';

const LandingPage = () => {
  const [signup, setSignUp] = useState(false)
  const [signin, setSignIn] = useState(false)

  const clickSignUp = () => {
    setSignUp(true)
  }

  const clickSignIn = () => {
    setSignIn(true)
  }

  return (
    <div className='landing'>
      <nav>
        <div className="nav-con">
            <div className="logo">
                FluxMedium
            </div>
            <div className="links">
                <ul className='navlinks'>
                    <li>Our Story</li>
                    <li>Membership</li>
                </ul>
                <Button variant='contained' style={{marginRight : 8, color: "hsl(240, 44%, 25%)"}}
                    onClick={clickSignIn}
                >Sign In</Button>
                <Button onClick={clickSignUp} variant="contained" color="primary">Get Started</Button>
            </div>
        </div> 
      </nav>
      <Container style={{marginTop : "10rem", display : "flex", gap : "2rem", flexDirection : "column", maxWidth : "60%"}}>
        <Typography variant='h3' style={{fontWeight : "600" , color : "hsl(240, 44%, 25%)"}}>Stay Curious</Typography>
        <Typography variant='h5' style={{maxWidth : "70%"}}>
            Discover stories, thinking, and expertise from writers on any topic.
        </Typography>
        <Button style={{maxWidth : "30%"}} variant="contained" color="primary" onClick={clickSignUp}>Start Reading.</Button>
      </Container>
      <ModalSignUp setSignUp={setSignUp} allowSignIn={clickSignIn} allowSignUp={clickSignUp} isSignUp={signup} setSignIn={setSignIn} isSignIn={signin}/>
    </div>
  )
}

const getModalStyle = () => {
    const top = 15
    const left = 30

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    }
}

//style our modal class
const useStyles = makeStyles((theme) => ({
    paper : {
        position : 'absolute',
        // width : 900,
        // height : 950,
        width: theme.spacing(110),
        height: theme.spacing(120),
        backgroundColor : theme.palette.background.paper,
        boxShadow : theme.shadows[10],
    }
}))

//wrapper class for our signup and signin
const ModalSignUp = ({setSignUp, isSignUp, setSignIn, isSignIn, allowSignIn, allowSignUp}) => {
    const classes = useStyles()
    const [modalStyle] = React.useState(getModalStyle)

    const closeModal = () =>{
        if(isSignIn){
            setSignIn(prev => !prev);
        } else if (isSignUp){
            setSignUp(prev => !prev)
        }
    }

    const body = (
        <Container>
            {
                isSignUp &&
                <Fade in={isSignUp}>
                    <Paper elevation={3} variant='outline' square style={modalStyle} className={classes.paper}>
                        <Signup changetoSignIn={allowSignIn}/>
                    </Paper>
                </Fade>
            }
            {
                isSignIn &&
                <Fade in={isSignIn}>
                    <Paper elevation={3} variant='outline' square style={modalStyle} className={classes.paper}>
                        <SignIn changetoSignUp={allowSignUp}/>
                    </Paper>
                </Fade>
            }
        </Container>
    );

    return (
        <>
            <div>
                <Modal
                    open={isSignUp || isSignIn}
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    onClose={closeModal}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 2000,
                    }}
                >
                    {body}
                </Modal>
            </div>
        </>
    )
}

export default LandingPage
