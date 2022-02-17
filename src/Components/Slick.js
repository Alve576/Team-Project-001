import React, { useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion';
import TelegramIcon from '@mui/icons-material/Telegram';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const Slick = () => {
      const [width,setWidth] = useState(0);
      const carousel = useRef();
      const banners = [
        {
          "img" : "https://i.ibb.co/0CR30rB/slider-2.png",
          "caption" : "Fresh vegetable big discount",
          "offer"  : "save up to 50% off on your first order "
        },
        {
          "img" : "https://i.ibb.co/QNTBmqV/slider-1.png",
          "caption" : "Don't miss amazing grossy deals",
          "offer"  : "Sign up for daily newsletter"
        }
      ]
      useEffect(()=>{

          setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
      },[])
  return (
    <div className='container mt-5 mb-5'>
      <motion.div ref={carousel} className='carousel' whileTap={{cursor : "grabbing"}}>
            <motion.div drag='x' dragConstraints={{right : 0,left : -width}} className='inner-carousel'>
                       {banners.map(banner=> (
                         <div className='col-lg-12'>
                            <Card sx={{ display: 'flex',
                                        backgroundImage : `url(${banner.img})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                        padding: "131px",
                                        textAlign: "left",
                                        borderRadius : 16
                                    }}>
                                <Box sx={{ display: 'flex',color : "#253D4E", flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography style={{fontWeight : 'bolder'}} component="div" variant="h3">
                                        {banner.caption}
                                    </Typography>
                                    <Typography component="div" variant="h5">
                                      {banner.offer}
                                    </Typography>
                                    
                                    </CardContent>
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                        
                                      <Box
                                            sx={{
                                                boxShadow : 16,
                                                width: 500,
                                                maxWidth: '100%',
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
                                            <Button variant='contained' type='submit' sx={{color : 'white',background : "#3BB77E",borderRadius: 16,padding : 3}}>
                                                Subscribe
                                            </Button>   

                                            </Box>
                                    
                                    </Box>
                                </Box>
                              
                        </Card>
                    </div>
                       ))}
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Slick