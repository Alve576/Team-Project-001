import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Food = ({ food }) => {
    const { name, price, image, category } = food
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
            <CardActions className='d-flex'>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Typography variant="h5">
                    {price}
                </Typography>
            </CardActions>
        </Card>
    );
};

export default Food;