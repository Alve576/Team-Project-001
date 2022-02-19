import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card,Grid, Button, Container, Typography, CardMedia, Rating } from "@mui/material";
import { ShoppingCart } from '@mui/icons-material';
import Navbar from './../../Components/Navbar'
import Footer from './../../Components/Footer/Footer'
import useAuth from './../../Hooks/useAuth';

const SingleFood = () => {
    const {user} = useAuth();
    const { foodId } = useParams()
    const [foods, setFoods] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/foods/${foodId}`)
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    const updateCart = (e) => {
      foods.email = user.email;
      fetch("http://localhost:5000/cart", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(foods),
      })
          .then((res) => res.json())
          .then((result) => {
              if (result.insertedId) {
                  alert('Added To Cart');
               
              }
              else if (result.modifiedCount) {
                  alert('One more product added');
              }
              else
                  alert('Something Went Wrong');
          });

      console.log(foods);
  }
    return (
        <>
        <Navbar/>
            <Container>
        <Grid container sx={{display :  'flex', padding : 10}} >
        <Grid item xs={6} md={8} lg={6} className="image-wrapper">
        
           <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                image={foods.image}
                alt="Paella dish"
              />
           </Card>
        </Grid>
        <Grid item xs={6} md={8} lg={6} className="image-wrapper" sx={{textAlign: 'left'}}>
        
            <Typography variant="h3" paragraph>{foods.name}</Typography>
            <Typography variant="h5" sx={{color : 'rgb(210, 63, 87)'}}>{foods.price}</Typography>
            <Grid sx={{display : 'flex', pt : 5,pb : 5}}>
                                <Button
                                  size="small"
                                  variant="contained"
                                  className="increase-product-quantity"
                                  onClick=""
                                  >+</Button>
                                  <Typography className="quantity ps-4 pe-4" variant="h6">
                                      Quantity: 1
                                      </Typography>
                                      <Button
                                      size="small"
                                      color="secondary"
                                      variant="contained"
                                      onClick=""
                                      >
                                      -
                                      </Button>
                                    </Grid>
                                      <Rating name="no-value" value={null} /> <br/>
                                      <Button onClick={() => updateCart()} variant="contained" sx={{backgroundColor : 'rgb(210, 63, 87)', paddingTop : '10px'}}>Add To Cart <ShoppingCart/></Button>
  
                                    </Grid>
  
      </Grid>
      </Container>
      <Footer/>
        </>
    );
}

export default SingleFood