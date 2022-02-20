import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { ShoppingBag, ShoppingCart, Favorite } from '@mui/icons-material';
import useAuth from './../../Hooks/useAuth';

const Product = ({ product }) => {
    const { image, name, title2, price, category, _id } = product;
    const {user} = useAuth()

    const updateCart = (e) => {
        product.email = user.email;
        fetch("https://evening-cliffs-29291.herokuapp.com/cart", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(product),
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
  
        console.log(product);
    }
    return (
        <Card className="col-lg-4 my-3" sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography className='text-uppercase' gutterBottom variant="h7" component="div">
                        {category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">{
                        title2
                    }
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className='d-flex justify-content-between'>
                <Link className='text-decoration-none' to={`/singleRecipe/${_id}`}>
                    <Button size="small" sx={{ background: '#253D4E', color: "#3BB77E" }}>
                        Parches
                    </Button>
                </Link>
                <IconButton onClick={()=> updateCart()}  sx={{ color: "#3BB77E" }}>
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

export default Product;