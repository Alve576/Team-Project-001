import Box from '@mui/material/Box';
import { Facebook, GitHub, LinkedIn } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{display: 'flex',
            mt : 10,
            fontSize: '0.875rem',
            fontWeight: '700',
            color : 'black',
            justifyContent: 'space-around',
            padding : '100px'
        }}
        >
                <Box className='d-flex'>
                    <Typography style={{fontWeight : 'bolder',textDecoration : 'none',color : '#3BB77E'}} variant='h6'>
                            Support Contact<br/>    
                            01995595975 
                        </Typography>
                </Box>
            <Typography style={{fontWeight : 'bolder',textDecoration : 'none', color : '#3BB77E'}} variant='h6'>@2022 ALL RIGHT RESERVED</Typography>
            <Typography style={{fontWeight : 'bolder',textDecoration : 'none'}} variant='h6'>
                    <IconButton style={{color : '#3BB77E'}}>
                        <Facebook/>
                    </IconButton>
                    <IconButton style={{color : '#3BB77E'}}>
                        <LinkedIn/>
                    </IconButton>
            </Typography>
           
           
        </Box>
    )
}



export default Footer;