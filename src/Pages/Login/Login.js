import { TextField,Typography,Paper,Box,Button } from "@mui/material";
import { signInWithEmailAndPassword,getAuth } from "firebase/auth";
import React, { useState } from "react";
import { blue, orange } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link, NavLink } from 'react-router-dom';
import './style.css'
import useAuth from './../../Hooks/useAuth'
import Navbar from './../../Components/Navbar.js';
import Footer from './../../Components/Footer/Footer';

const Login = () => {

  const {login} = useAuth();
  const [loginData,setLoginData] = useState({});

  const handleLoginOnSubmit = (e) => {
    login(loginData.email,loginData.password)
    e.preventDefault()
  };

  const handleOnChnage = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = {...loginData};
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  
  return (
   <>
      <Navbar/>
      <Box className="container" style={{ fontFamily: 'Quicksand',marginTop:'50px'}}>
        <div className="row d-flex align-items-center">
              <Box className="col-lg-6 shadow-lg" style={{color : "#3BB77E",borderRadius : 16,}}>
              <Typography variant="h4" className="m-5 fontmy">Register Now</Typography>
              <form  onSubmit={handleLoginOnSubmit}>
                  <TextField 
                      id="filled-basic" 
                      sx={{mt : 5}}
                      label="Your Email" 
                      name='email'
                      fullWidth
                      onChange={handleOnChnage}
                      variant="filled" /><br/>
                  <TextField 
                      id="filled-basic" 
                      sx={{mt : 5}}
                      label="Your Password" 
                      name='password'
                      fullWidth
                      onChange={handleOnChnage}
                      type='password'
                      variant="filled" /><br/>
                  <Button variant='contained' type='submit' sx={{background : '#253D4E',color : "#3BB77E" ,m:5}}>Login</Button><br/>
                  <NavLink to='/register' style={{color : "#3BB77E",}}><a variant='contained'>New user? register</a></NavLink>
                
                </form>
            <Typography variant="h5" className=" mt-5 fontmy">Or</Typography>
            <Box className="d-flex justify-content-center fontmy">
             
              <Avatar sx={{ bgcolor: orange[500] }} className='m-3'>
                <GoogleIcon />
              </Avatar>
              <Avatar sx={{ bgcolor: blue[500] }} className='m-3'>
                <FacebookIcon />
              </Avatar>
            </Box>
          </Box>
          <div className="col-lg-6">
            <img className="img-fluid" src="https://i.ibb.co/D4YLYZy/undraw-Advanced-customization-re-wo6h.png"/>
          </div>
        </div>
      </Box>
      <Footer/>
     
   </>
  );
};


export default Login;