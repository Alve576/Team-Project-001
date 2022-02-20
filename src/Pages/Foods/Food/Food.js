import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ShoppingCart, Favorite } from '@mui/icons-material';
import useAuth from './../../../Hooks/useAuth'

const Food = ({ food }) => {
    const { name, price, image, category,_id } = food;
    const {user} = useAuth()

    const updateCart = (e) => {
        food.email = user.email;
        fetch("https://evening-cliffs-29291.herokuapp.com/cart", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(food),
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
  
        console.log(food);
    }
    return (
        <Card className="col-lg-4 my-3" sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="50%"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography className='text-uppercase' gutterBottom variant="h5" component="div">
                        {category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">{
                        name
                    }
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className='d-flex justify-content-between'>
               <Link to={`/singleFood/${_id}`}>
                    <Button size="small" sx={{ background: '#253D4E', color: "#3BB77E", }}>
                        Details
                    </Button>
                </Link> 
                <IconButton onClick={()=> updateCart()} sx={{ color: "#3BB77E" }}>
                    <ShoppingCart/>
                </IconButton>

                <IconButton sx={{ color: "#3BB77E" }}>
                    <Favorite/>
                </IconButton>
                <Typography variant="body2" color="text.secondary">${
                    price
                }
                </Typography>
            </CardActions>
        </Card>
    );
};

export default Food;