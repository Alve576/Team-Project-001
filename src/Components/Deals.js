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
import TextField from '@mui/material/TextField';
import TelegramIcon from '@mui/icons-material/Telegram';

const Deals = () => {
  return (
    <div className="container-fluid mt-5">

       <div className='d-flex row justify-content-center'>
        
               <div className='col-lg-12'>
                    <Card sx={{ display: 'flex',
                                backgroundImage : `url('https://i.ibb.co/4RRcHGB/banner-10.png')`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "right",
                                backgroundSize: "contain",
                                padding: "131px",
                                textAlign: "left"
                             }}>
                            <Box sx={{ display: 'flex',color : "#253D4E", flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                   Stay home & get your daily
                                    needs from our shop 
                                </Typography>
                                
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                    
                                  <Box
                                        sx={{
                                            boxShadow : 16,
                                            width: 500,
                                            display:'flex',
                                            borderRadius: 16,
                                            background : 'white',
                                            justifyContent : 'space-between'
                                        }}
                                        >
                                        <IconButton>
                                                <TelegramIcon/> 
                                                Your email adress
                                        </IconButton>
                                         <Button variant='contained' type='submit' sx={{color : 'white',background : "#3BB77E",borderRadius: 16,padding : 4}}>
                                            Subscribe
                                        </Button>   

                                        </Box>
                                
                                </Box>
                            </Box>
                           
                    </Card>
                </div>
          
       </div>
    </div>
  );
}

export default Deals