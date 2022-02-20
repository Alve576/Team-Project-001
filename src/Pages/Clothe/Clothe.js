import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ShoppingCart, Favorite } from '@mui/icons-material';
import useAuth from './../../Hooks/useAuth';

const Clothe = ({ clothe }) => {
    const { name, price, image, cetagory,_id } = clothe;
    const {user} = useAuth()

    const updateCart = (e) => {
        clothe.email = user.email;
        fetch("https://evening-cliffs-29291.herokuapp.com/cart", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(clothe),
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
  
        console.log(clothe);
    }
    return (
        <Card className="col-lg-4 my-3" sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="50%"
                    width="50%"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography className='text-uppercase' gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">{
                        cetagory
                    }
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className='d-flex justify-content-between'>
                 <Link to={`/singleCloth/${_id}`}>
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

export default Clothe;