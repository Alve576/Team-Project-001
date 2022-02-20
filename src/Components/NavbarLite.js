import React, { useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import headphone from './../Images/icon-headphone.svg'
import { Typography } from '@mui/material';
import useAuth from './../Hooks/useAuth';

export default function DenseAppBar() {
   const { user } = useAuth()
  return (
      <Box className='container-fluid' sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor : 'white'}}>
        <Box style={{display :'flex',justifyContent : 'space-between'}}>

          <IconButton edge="start" color="secondary" aria-label="menu">
            <Button variant='contained' type='submit' sx={{color : 'white',background : "#3BB77E"}}>
                Browse All Collection
                <MenuIcon />
            </Button>

          </IconButton>
        <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
          <IconButton>
            <Link style={{fontWeight : 'bolder',textDecoration : 'none',color : '#253D4E'}} to='/'>
                Home
            </Link>
          </IconButton>
          <IconButton>
            <Link style={{fontWeight : 'bolder',textDecoration : 'none',color : '#253D4E'}} to='/shop/recipes'>
                Shop
            </Link>
          </IconButton>
          <IconButton>
            <Link style={{fontWeight : 'bolder',textDecoration : 'none',color : '#253D4E'}} to='/aboutUs'>
                About
            </Link>
          </IconButton>
          <IconButton>
            <Link style={{fontWeight : 'bolder',textDecoration : 'none',color : '#253D4E'}} to='/contactUs'>
                Contact
            </Link>
          </IconButton>
          {user.email && <IconButton>
            <Link style={{fontWeight : 'bolder',textDecoration : 'none',color : '#253D4E'}} to='/dashboard/dashboardhome'>
                Dashboard
            </Link>
          </IconButton>}
        </Box>
        <Box className='d-flex'>
            <img src={headphone}/>  
            <Typography style={{fontWeight : 'bolder',textDecoration : 'none',color : '#3BB77E'}} variant='h6'>
                Support Contact<br/>    
                01995595975 
            </Typography>
        </Box>
          
        </Box>
      </AppBar>
    </Box>
    
  );
}

