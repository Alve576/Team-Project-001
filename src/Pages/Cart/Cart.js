import { Login } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './../../Components/Navbar'
import useAuth from './../../Hooks/useAuth';
import Footer from './../../Components/Footer/Footer'
const Cart = () => {
    const {carts} = useAuth()
  return (
    <div>
        <Navbar/>
        {
            carts.length > 0 ?  <div className='container mt-5'>
            <h1 className='mt-5'>Your Cart is Empty</h1>
                
            <div className='row'>
                {
                    carts.map((cart) => (
                        <div className='col-lg-8 border p-2 d-flex align-items-center justify-content-between'>
                            <Box className='border w-25'>
                                <img className='img-fluid' src={cart.image}/>
                            </Box>  
                            <Box>
                                <h5 style={{fontWeight : 'bolder',color : '#253D4E'}}>{cart.name}</h5>
                            </Box>
                            <Box>
                                <h5 style={{fontWeight : 'bolder',color : '#253D4E'}}>Price : {cart.price}</h5>
                            </Box>
                        </div>
                    ))

                }
                <div className='col-lg-8 border p-2 d-flex align-items-center justify-content-end'>
                    <Box>
                        <Link to='/checkout'>
                            <Button variant='contained' type='submit' sx={{color : 'white',background : "#3BB77E"}}>
                                Checkout <Login/>
                            </Button>
                        </Link>
                    </Box>
                </div>
            </div>
        </div> :
        <h1 className='m-5'>Your Cart is Empty</h1>
        }
        <Footer/>
    </div>
  )
}

export default Cart