import React from 'react';
import { Typography } from '@mui/material';

const Sidebar = () => {
    return (
        <div sx={{ borderRadius: '50%', boxShadow: 2, }} style={{ border: "1px solid red" }}>
            <Typography variant="h4" gutterBottom component="div">
                Category
            </Typography>
        </div>
    );
};

export default Sidebar;