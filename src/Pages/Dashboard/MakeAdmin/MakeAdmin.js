import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
const MakeAdmin = () => {
   
    
    return (
        <div className='text-start '>
           <div className='d-flex justify-content-center align-items-center' style={{flexDirection:'column'}}>
                     <h2>Make an Admin</h2>
                    <form onSubmit='' className='border shadow-lg p-5 m-5 w-50' style={{color: '#253D4E',backgroundColor : "#3BB77E"}}>
                        <TextField
                            sx={{ width: '50%' }}
                            label="Email"
                            type="email"
                            onBlur=''
                            variant="standard" /><br/>
                        <Button className='mt-5' sx={{backgroundColor: '#253D4E', color: "#3BB77E"}} type="submit" variant="contained">Make Admin</Button>
                    </form>
           </div>
           <div className="col-lg-12">
                <div className="card p-5" style={{backgroundColor : '#253D4E',color: "#3BB77E"}}>
                        
                            <table>
                            <thead>
                                <tr>
                                    <th>Admin</th>
                                    <th>Email</th>
                                    <th>Name</th>
                                    <th>Position</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Michael Austin</td>
                                    <td>shadmanzz656@gmail.com</td>
                                    <td>Shad Islam Alve</td>
                                    <td>CEO</td>
                                </tr>
                                <tr>
                                    <td>Michael Austin</td>
                                    <td>shadmanzz656@gmail.com</td>
                                    <td>Shad Islam Alve</td>
                                    <td>CEO</td>
                                </tr>
                                <tr>
                                    <td>Michael Austin</td>
                                    <td>shadmanzz656@gmail.com</td>
                                    <td>Shad Islam Alve</td>
                                    <td>CEO</td>
                                </tr>
                                
                            </tbody>
                            </table>
                        </div>
                    </div>
            
        </div>
    );
};

export default MakeAdmin;