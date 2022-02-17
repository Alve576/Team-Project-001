import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './ShopHeader.css'

const ShopHeader = () => {
    return (
        <Box className='header-bg' sx={{ display: "flex", mx: 5, my: 5, borderRadius: 5 }}>
            <Grid xs={10}>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', pt: 5 }}>

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

                </Box >
            </Grid>
            <Grid xs={2} sx={{ my: 5 }}>
                <Typography variant="h2">Blog & News</Typography>
                <Typography>
                    Blog & News
                </Typography>
                <Link to="/home"><Button variant="text">Home</Button></Link>
            </Grid>
        </Box>
    );
};

export default ShopHeader;