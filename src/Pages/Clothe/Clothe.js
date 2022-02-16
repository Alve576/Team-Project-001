import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Clothe = ({ clothe }) => {
    const { name, price, image, cetagory } = clothe;
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
                <Button size="small" sx={{ background: '#253D4E', color: "#3BB77E", m: 5 }}>
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

export default Clothe;