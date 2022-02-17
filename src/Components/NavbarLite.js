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

export default function DenseAppBar() {
   
  return (
    <>
      <Box className='flow-hide' sx={{ flexGrow: 2 }}>
      <AppBar position="static" style={{backgroundColor : 'white'}}>
        <Toolbar variant="dense" style={{justifyContent : 'space-between'}}>

          <IconButton edge="start" color="secondary" aria-label="menu" sx={{ mr: 2 }}>
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
            <Link style={{fontWeight : 'bolder',textDecoration : 'none',color : '#253D4E'}} to='/shop'>
                Shop
            </Link>
          </IconButton>
          <IconButton>
            <Link style={{fontWeight : 'bolder',textDecoration : 'none',color : '#253D4E'}} to='/about'>
                About
            </Link>
          </IconButton>
          <IconButton>
            <Link style={{fontWeight : 'bolder',textDecoration : 'none',color : '#253D4E'}} to='/contact'>
                Contact
            </Link>
          </IconButton>
          <IconButton>
            <Link style={{fontWeight : 'bolder',textDecoration : 'none',color : '#253D4E'}} to='/dashboard/dashboardhome'>
                Dashboard
            </Link>
          </IconButton>
        </Box>
        <Box className='d-flex'>
            <img src={headphone}/>  
            <Typography style={{fontWeight : 'bolder',textDecoration : 'none',color : '#3BB77E'}} variant='h6'>
                Support Contact<br/>    
                01995595975 
            </Typography>
        </Box>
          
        </Toolbar>
      </AppBar>
    </Box>
    
    </>
  );
}

