import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card,Grid, Button, Container, Typography, CardMedia, Rating } from "@mui/material";
import { ShoppingCart } from '@mui/icons-material';
import Navbar from './../../Components/Navbar'
import Footer from './../../Components/Footer/Footer'
import useAuth from './../../Hooks/useAuth';


const SingleRecipe = () => {
    const {user} = useAuth();
    const { recipeId } = useParams()
    const [recipe, setRecipe] = useState({})
    useEffect(() => {
        fetch(`https://evening-cliffs-29291.herokuapp.com/products/${recipeId}`)
            .then(res => res.json())
            .then(data => setRecipe(data))
    }, [])


    const updateCart = (e) => {
      recipe.email = user.email;
      fetch("https://evening-cliffs-29291.herokuapp.com/cart", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(recipe),
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

      console.log(recipe);
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
              image={recipe.img}
              alt="Paella dish"
            />
         </Card>
      </Grid>
      <Grid item xs={6} md={8} lg={6} className="image-wrapper" sx={{textAlign: 'left'}}>
      
          <Typography variant="h3" paragraph>{recipe.title}</Typography>
          <Typography variant="h5" sx={{color : 'rgb(210, 63, 87)'}}>{recipe.price}</Typography>
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
};

export default SingleRecipe;