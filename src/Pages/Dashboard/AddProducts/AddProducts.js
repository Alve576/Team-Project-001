import React from 'react';
import { useForm } from "react-hook-form";
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

const AddProducts = () => {
    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();

    return (
        <>
        <div className='' >
            <form onSubmit='' className=' p-5 shadow-lg rounded' style={{color: '#253D4E',backgroundColor : "#3BB77E"}}>
                <h1>Add A Product</h1>
                <TextField
                            sx={{ width: '50%',m : 2 }}
                            type="email"
                            onBlur=''
                            variant="standard"
                            label="Name" {...register("name")} /><br/>
                <TextField
                            sx={{ width: '50%',m : 2 }}
                            type="email"
                            onBlur=''
                            variant="standard"
                            label="Price" {...register("price")} /><br />
                <TextField
                            sx={{ width: '50%',m : 2 }}
                            type="email"
                            onBlur=''
                            variant="standard"
                            label="Description" {...register("description")} /><br />
                {/* include validation with required or other standard HTML validation rules */}
                <TextField
                            sx={{ width: '50%',m : 2 }}
                            type="email"
                            onBlur=''
                            variant="standard"
                            label="image-link" {...register("image", { required: true })} /><br />
                
                <Button className='mt-5' sx={{backgroundColor: '#253D4E', color: "#3BB77E"}} type="submit" variant="contained">Submit</Button>

            </form>
            
        </div>
        <div class="row">
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
      </>
    );
};

export default AddProducts;