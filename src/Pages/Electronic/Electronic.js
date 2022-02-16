import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Electronic = ({ electronic }) => {
    const { name, price, image, category } = electronic;
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
                <Button size="small" sx={{ background: '#253D4E', color: "#3BB77E" }}>
                    Parches
                </Button>
                <Typography variant="body2" color="text.secondary">${
                    price
                }
                </Typography>
            </CardActions>
        </Card>
    );
};

export default Electronic;