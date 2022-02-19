import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './ShopHeader.css'
import Toolbar from '@mui/material/Toolbar';

const ShopHeader = () => {
    return (
        <div className='header-bg mt-5 mb-5' sx={{ display: "flex", borderRadius: 5 }}>
            <div className='container d-flex align-items-center justify-content-around mb-5'>
                <div sx={{ display: 'flex', justifyContent: 'space-evenly', pt: 5 }}>

                    <Link to={`/shop/recipes`}>
                        <Button variant="text" sx={{ backgroundColor: "white", px: 4, py: 1, borderRadius: 10, }} >
                            Recipes
                        </Button>
                    </Link>

                    <Link to={`/shop/foods`}>
                        <Button variant="text" sx={{ backgroundColor: "white", px: 4, py: 1, borderRadius: 10, }} >
                            Foods
                        </Button>
                    </Link>

                    <Link to={`/shop/electronics`}>
                        <Button variant="text" sx={{ backgroundColor: "white", px: 4, py: 1, borderRadius: 10, }} >
                            Electronics
                        </Button>
                    </Link>

                    <Link to={`/shop/clothes`}>
                        <Button variant="text" sx={{ backgroundColor: "white", px: 4, py: 1, borderRadius: 10, }} >
                            Clothes
                        </Button>
                    </Link>

                </div >
                <div >
                    <Typography variant="h2">Blog & News</Typography>
                    <Typography>
                        Blog & News
                    </Typography>
                    <Link to="/home"><Button variant="text">Home</Button></Link>
                </div>
            </div>
            <div
                sx={{ mt: 10 }}
            >
                <Toolbar />

                <Outlet className="mt-5"></Outlet>

            </div>
        </div>
    );
};

export default ShopHeader;