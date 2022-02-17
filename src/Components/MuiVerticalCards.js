import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Button } from '@mui/material';

export default function MediaControlCard() {
  const theme = useTheme(); 
  const images = [
      {
          "img" : "https://i.ibb.co/mNntkvQ/banner-3.png",
          "caption" : "Everyday Fresh &Clean with Our Products"
      },
      {
          "img" : "https://i.ibb.co/60rLQSq/banner-2.png",
          "caption" : "Make your Breakfast Healthy and Easy with us"
      },
      {

          "img" : "https://i.ibb.co/3WPr5jX/banner-1.png",
          "caption" : "The best Organic Products get from Online "
      }
  ]
  return (
    <div className="container-fluid mt-5">
            <h1 style={{color : "#253D4E",fontWeight : 'bolder', textAlign : 'left'}}>Popular Products</h1>

       <div className='d-flex row justify-content-center'>
         {
            images.map(image => (
               <div className='col-lg-4'>
                    <Card sx={{ display: 'flex',
                                backgroundImage : `url(${image.img})`,
                                padding: "58px",
                                backgroundPosition: "center",
                                textAlign: "left"
                             }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                   {image.caption}
                                </Typography>
                                
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                    
                                <IconButton aria-label="play/pause">
                                    <Button variant='contained' type='submit' sx={{color : 'white',background : "#3BB77E"}}>
                                        Shop
                                            <ArrowRightAltIcon />
                                        </Button>
                                </IconButton>
                                
                                </Box>
                            </Box>
                           
                    </Card>
                </div>
            ))
        }
       </div>
    </div>
  );
}
