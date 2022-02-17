import React, { useState } from "react";
import { TextField,Typography,Paper,Box,Button } from "@mui/material";
import { Link, NavLink } from 'react-router-dom';
import './../Login/style.css'
import useFirebase from './../../Hooks/useFirebase';
import Navbar from './../../Components/Navbar'
import Footer from './../../Components/Footer/Footer';

const Register = () => {
  const [loginData,setLoginData] = useState({});
  const {registerUser} = useFirebase();


  const handleLoginOnSubmit = (e) => {
    if(loginData.password !== loginData.password2){
        
        return;
    }
    registerUser(loginData.email,loginData.password)
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
    <Box className="container fontmy mt-5">
      <div className="row d-flex align-items  fontmy">
            <div className="col-lg-6 fontmy">
                <img className="img-fluid" src="https://i.ibb.co/D4YLYZy/undraw-Advanced-customization-re-wo6h.png"/>
              </div>
              <Box className="col-lg-6 shadow-lg" style={{color : "#3BB77E",borderRadius : 16,}}>
              <Typography variant="h4" className="m-5 fontmy">Register Now</Typography>
              <form onSubmit={(e) => handleLoginOnSubmit(e)}>
                  <TextField 
                      id="filled-basic"
                      sx={{mt : 5}} 
                      label="Your Email" 
                      name='email'
                      type='email'
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
                  <TextField 
                      id="filled-basic"
                      sx={{mt : 5}} 
                      label="Retype Password" 
                      name='password2'
                      fullWidth
                      onChange={handleOnChnage}
                      type='password'
                      variant="filled" /><br/>
                  <Button variant='contained' type='submit' sx={{background : '#253D4E',color : "#3BB77E" ,m:5}}>Register</Button><br/>
                  <NavLink to='/login' style={{color : "#3BB77E",}}><a variant='contained'>Already have an account? login</a></NavLink>
                </form>
           
          </Box>
       
      </div>
    </Box>
    <Footer/>
 </>
  );
};

export default Register;
