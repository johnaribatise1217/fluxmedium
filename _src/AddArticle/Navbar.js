import React from 'react'
import './AddArticle.css'
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import {GrNotification} from 'react-icons/gr'
import {BiSolidUser} from 'react-icons/bi'
import {FiMoreHorizontal} from 'react-icons/fi'

const Navbar = () => {
  return (
    <div>
        <nav className='nav'>
            <div className="nav-cont">
                <div className="one">
                    <Link to='/medium'>
                        <h3>FluxMedium</h3>
                    </Link>
                    <Typography style={{fontSize: "17px"}} variant='h6'>Draft in Aribatise John.</Typography>
                </div>
                <div className="actions">
                    <button className="pub">
                        Publish
                    </button>
                    <FiMoreHorizontal/>
                    <GrNotification/>
                    <BiSolidUser/>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
