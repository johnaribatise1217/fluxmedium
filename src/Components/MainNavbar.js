import React from 'react'
import { alpha, makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography, InputBase, Badge, MenuItem, Menu, Button } from '@material-ui/core';
import {FiMenu, FiMoreVertical} from 'react-icons/fi'
import {BiSearch, BiUser} from 'react-icons/bi'
import {GrNotification} from 'react-icons/gr'
import {AiOutlineMail} from 'react-icons/ai'
import {FaPencil} from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    fontSize : "1.5rem",
    fontFamily : "Montserrat",
    fontWeight : 450,
    cursor : 'pointer'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#f5f5f5",
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.5),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color : '#9e9e9e'
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  list : {
    width : 300,
    marginTop : 10
  },
  fullList : {
    width : 'auto'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 300,
      flexShrink: 0,
    },
  },
}));

const MainNavbar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };

    return (
        <div className={classes.grow}>
        <AppBar position="static" style={{background : "white" , color : "black", boxShadow :"none", borderBottom : "1px solid #e8eaf6"}}>
            <Toolbar>
            <Link to='/'>
              <Typography className={classes.title} variant="h6"  noWrap>
                FluxMedium
              </Typography>
            </Link>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <BiSearch style={{color : "#9e9e9e"}}/>
                </div>
                <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop} style={{
              display:'flex',
              alignItems:"center",
              gap : '1rem'
            }}>
                <Link to='/write'>
                  <IconButton color="inherit">
                    <FaPencil style={{color: "#9e9e9e"}}/>
                    <h6 style={{color : "#9e9e9e"}}>write</h6>
                  </IconButton>
                </Link>
                <IconButton aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="secondary">
                        <GrNotification style={{color : "#9e9e9e", marginRight : 10}}/>
                    </Badge>
                </IconButton>
                <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                >
                  <BiUser style={{color : "#9e9e9e", marginRight : 12}}/>
                </IconButton>
                <Button color='primary'>
                  Logout
                </Button>
                <Typography variant='h6'>
                  {
                    auth.user ? 
                      <div className="welcome"
                        style={{
                          fontFamily : 'tahoma',
                          fontWeight: '200',
                          color : 'grey'
                        }}
                      >
                        <h5>Welcome</h5>
                        <h6>{auth.userName}</h6>
                      </div> : ''
                  }
                </Typography>
            </div>
            </Toolbar>
        </AppBar>
      </div>
    );
}

export default MainNavbar
