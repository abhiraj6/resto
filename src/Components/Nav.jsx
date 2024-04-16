import { AppBar, Avatar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
              &nbsp;&nbsp;&nbsp;
              <Button variant='text'>
                <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
                    <Avatar alt="Remy Sharp" src="https://github.com/abhiraj6/img/blob/main/RESTO%20(1).jpg?raw=true" />
                </Link>
              </Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Nav