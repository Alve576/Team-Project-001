import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { img, title, title2, price, category, _id } = product;
    return (
        <Card className="col-lg-4 my-3" sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
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
                <Typography variant="body2" color="text.secondary">${
                    price
                }
                </Typography>
            </CardActions>
        </Card>
    );
};

export default Product;