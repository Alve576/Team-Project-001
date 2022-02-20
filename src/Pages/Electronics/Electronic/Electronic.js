import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ShoppingCart, Favorite } from '@mui/icons-material';
import useAuth from './../../../Hooks/useAuth'
const Electronic = ({ electronic }) => {
    const { name, price, image, category,_id } = electronic;
    const {user} = useAuth()

    const updateCart = (e) => {
        electronic.email = user.email;
        fetch("https://evening-cliffs-29291.herokuapp.com/cart", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(electronic),
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
  
        console.log(electronic);
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
                    <Typography className='text-uppercase' gutterBottom variant="h7" component="div">
                        {category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">{
                        name
                    }
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className='d-flex justify-content-between'>
                <Link to={`/singleElectronic/${_id}`}>
                    <Button size="small" sx={{ background: '#253D4E', color: "#3BB77E", }}>
                        Parches
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

export default Electronic;