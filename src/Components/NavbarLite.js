import React, { useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Badge, Button } from '@mui/material';
import headphone from './../Images/icon-headphone.svg'
import { Typography } from '@mui/material';
import useAuth from './../Hooks/useAuth';

export default function DenseAppBar() {
   const { user } = useAuth()
  return (
      <Box  sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor : 'white',color : "#3BB77E",padding:'10px'}}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ borderRadius : 5 ,padding : '10px',display: { xs: 'block', sm: 'block',backgroundColor : "#3BB77E", color : 'white' } }}
          >
           Browse all collections <MenuIcon/>
          </Typography>
         
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
            
                    <IconButton>
                        <Link style={{textDecoration : 'none', color : '#253D4E',fontWeight : 'bolder'}} to='/'>
                            Home
                        </Link>
                    </IconButton>
                     <IconButton>
                        <Link style={{textDecoration : 'none', color : '#253D4E',fontWeight : 'bolder'}} to='/shop/recipes'>
                            Shop 
                        </Link>
                     </IconButton>
                     <IconButton>
                        <Link style={{textDecoration : 'none', color : '#253D4E',fontWeight : 'bolder'}} to='/aboutUs'>
                            About us
                        </Link>
                     </IconButton>
                     <IconButton>
                        <Link style={{textDecoration : 'none', color : '#253D4E',fontWeight : 'bolder'}} to='/contactUs'>
                            Contact us                     
                        </Link>
                     </IconButton>
                    {user.email && 
                      <IconButton>
                        <Link style={{textDecoration : 'none', color : '#253D4E',fontWeight : 'bolder'}} to='/dashboard/dashboardhome'>
                          Dashboard                     
                        </Link> 
                      </IconButton> 
                    }
           </Box>
           <Box sx={{ flexGrow: 1 }} />
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
    
  );
}

