import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MuiCard = ({food}) => {
        const { name, price, image, category } = food

  return (
         <Card sx={{ maxWidth: 150 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Snacks
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                         10 items
                    </Typography>
                </CardContent>
               
         </Card>
     )
}

export default MuiCard