import React from 'react';
import Carousel from '../Carousel/Carousel';
import { Button, InputAdornment, TextField, Typography } from '@mui/material';
import './AboutUs.css'
import CountUp from 'react-countup';
import YouTube from '@mui/icons-material/YouTube';
import Instagram from '@mui/icons-material/Instagram';
import GitHub from '@mui/icons-material/GitHub';
import Facebook from '@mui/icons-material/Facebook';
import { AccountCircle } from '@mui/icons-material';
import Navbar from "./../../Components/Navbar"
const AboutUs = () => {
    return (
        <div >
            <Navbar/>
            <h3>Welcome to Nest</h3>
            <div className='d-flex pt-5'>
                <div className="col-lg-6 text-end">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestiae odio, recusandae quo a natus at unde, quod voluptas maxime cumque? Ad repellendus quidem officia. Quasi, eligendi alias nesciunt repudiandae mollitia rem esse quia accusamus. Maiores, distinctio delectus, culpa aliquam iusto consequatur quam molestiae laborum assumenda non, et animi veritatis.
                    </p>
                    <Carousel></Carousel>
                </div>
                <div className="col-lg-6">
                    <img className='img-fluid w-75' style={{ borderRadius: 20 }} src="http://wp.alithemes.com/html/nest/demo-rtl/assets/imgs/page/about-1.png" alt="" />
                </div>
            </div>
            {/* cards  */}
            <div className='py-5'>
                <h3 className='py-5'>What We Provide?</h3>
                <div className="d-flex">
                    <div class="card mx-auto" style={{ width: "400px", borderRadius: "15px" }}>
                        <img src="http://wp.alithemes.com/html/nest/demo-rtl/assets/imgs/theme/icons/icon-3.svg" class="my-2 mx-auto text-center card-img-top" alt="..." style={{ width: "300px" }} />
                        <div class="card-body">
                            <h5 class="card-title">Free Delivery</h5>
                            <p class="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                        </div>
                    </div>
                    <div class="card mx-auto" style={{ width: "400px", borderRadius: "15px" }}>
                        <img src="http://wp.alithemes.com/html/nest/demo-rtl/assets/imgs/theme/icons/icon-2.svg" class="my-2 mx-auto text-center card-img-top" alt="..." style={{ width: "300px" }} />
                        <div class="card-body">
                            <h5 class="card-title">Free Delivery</h5>
                            <p class="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                        </div>
                    </div>
                    <div class="card mx-auto" style={{ width: "400px", borderRadius: "15px" }}>
                        <img src="http://wp.alithemes.com/html/nest/demo-rtl/assets/imgs/theme/icons/icon-1.svg" class="my-2 mx-auto text-center card-img-top" alt="..." style={{ width: "300px" }} />
                        <div class="card-body">
                            <h5 class="card-title">Free Delivery</h5>
                            <p class="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className="d-flex">
                    <div class="card mx-auto" style={{ width: "400px", borderRadius: "15px" }}>
                        <img src="http://wp.alithemes.com/html/nest/demo-rtl/assets/imgs/theme/icons/icon-6.svg" class="my-2 mx-auto text-center card-img-top" alt="..." style={{ width: "300px" }} />
                        <div class="card-body">
                            <h5 class="card-title">Great Daily Deal</h5>
                            <p class="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                        </div>
                    </div>
                    <div class="card mx-auto" style={{ width: "400px", borderRadius: "15px" }}>
                        <img src="http://wp.alithemes.com/html/nest/demo-rtl/assets/imgs/theme/icons/icon-5.svg" class="my-2 mx-auto text-center card-img-top" alt="..." style={{ width: "300px" }} />
                        <div class="card-body">
                            <h5 class="card-title">Free Delivery</h5>
                            <p class="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                        </div>
                    </div>
                    <div class="card mx-auto" style={{ width: "400px", borderRadius: "15px" }}>
                        <img src="http://wp.alithemes.com/html/nest/demo-rtl/assets/imgs/theme/icons/icon-4.svg" class="my-2 mx-auto text-center card-img-top" alt="..." style={{ width: "300px" }} />
                        <div class="card-body">
                            <h5 class="card-title">Free Delivery</h5>
                            <p class="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our performance */}
            <div className='container my-5 d-flex'>
                <div className="col-lg-4 text-end">
                    <Typography variant="h5" gutterBottom component="div" sx={{ color: "#b0bec5" }}>
                        Our performance
                    </Typography>
                    <Typography variant="h3" gutterBottom component="div" sx={{ color: "#b0bec5" }}>
                        Your Partner for e-commerce grocery solution
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom component="div">
                        Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom component="div" sx={{ mt: 5 }}>
                        Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                    </Typography>
                </div>
                <div>
                    <img src="https://i.ibb.co/W5XNqCz/about-5.png" className='w-75' alt="" />
                </div>
            </div>
            <div className='d-flex '>
                <div className='mx-4 text-end'>
                    <Typography variant="h6" gutterBottom component="div" sx={{ color: "#78909c" }}>
                        Our mission
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div" sx={{ color: "#455a64" }}>
                        Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.
                    </Typography>
                </div>
                <div className='mx-4 text-end'>
                    <Typography variant="h6" gutterBottom component="div" sx={{ color: "#78909c" }}>
                        Our history
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div" sx={{ color: "#455a64" }}>
                        Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.
                    </Typography>
                </div>
                <div className='mx-4 text-end'>
                    <Typography variant="h6" gutterBottom component="div" sx={{ color: "#78909c" }}>
                        Who we are
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div" sx={{ color: "#455a64" }}>
                        Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.
                    </Typography>
                </div>
            </div>
            {/* counter  */}
            <div className=' container counter-num-bg-img d-flex justify-content-around' style={{ color: "#a7ffeb" }}>
                <div>
                    <span className='count-style'>
                        +<CountUp end={127} duration={3} />
                    </span>
                    <Typography variant="h4" gutterBottom component="div">
                        Products Sale
                    </Typography>
                </div>

                <div>
                    <span className='count-style'>
                        +<CountUp end={45} duration={3} />
                    </span>
                    <Typography variant="h4" gutterBottom component="div">
                        Team advisor
                    </Typography>
                </div>

                <div>
                    <span className='count-style'>
                        +<CountUp end={57} duration={3} />
                    </span>
                    <Typography variant="h4" gutterBottom component="div">
                        Projects complete
                    </Typography>
                </div>
                <div>
                    <span className='count-style'>
                        +<CountUp end={37} duration={3} />
                    </span>
                    <Typography variant="h4" gutterBottom component="div">
                        Happy clients
                    </Typography>
                </div>
                <div>
                    <span className='count-style'>
                        +<CountUp end={12} duration={3} />
                    </span>
                    <Typography variant="h4" gutterBottom component="div">
                        Glorious years
                    </Typography>
                </div>

            </div>
            {/* our team  */}
            <div className='container'>
                <h2>Our Team</h2>
                <div className="d-flex">
                    <div className="col-lg-8 d-flex ">
                        <div className='mx-3'>
                            <img src="http://wp.alithemes.com/html/nest/demo-rtl/assets/imgs/page/about-8.png" style={{ width: "400px", borderRadius: "20px" }} alt="" />
                            <div className='our-team-box shadow'>
                                <h5>Dilan Specter</h5>
                                <p style={{ color: "lightgray" }}>Head Engineer</p>
                                <div >
                                    <a style={{ color: "#3BB77E" }} href="https://www.youtube.com/"><YouTube></YouTube></a>
                                    <a style={{ color: "#3BB77E" }} href="https://www.facebook.com/"><Facebook></Facebook></a>
                                    <a style={{ color: "#3BB77E" }} href="https://www.instagram.com/"><Instagram></Instagram></a>
                                    <a style={{ color: "#3BB77E" }} href="https://github.com/Heezol06"><GitHub></GitHub></a>
                                </div>
                            </div>
                        </div>
                        <div className='mx-3'>
                            <img src="http://wp.alithemes.com/html/nest/demo-rtl/assets/imgs/page/about-6.png" style={{ width: "400px", borderRadius: "20px" }} alt="" />
                            <div className='our-team-box shadow'>
                                <h5>H. Merinda</h5>
                                <p style={{ color: "lightgray" }}>CEO & Co-Founder</p>
                                <div >
                                    <a style={{ color: "#3BB77E" }} href="https://www.youtube.com/"><YouTube></YouTube></a>
                                    <a style={{ color: "#3BB77E" }} href="https://www.facebook.com/"><Facebook></Facebook></a>
                                    <a style={{ color: "#3BB77E" }} href="https://www.instagram.com/"><Instagram></Instagram></a>
                                    <a style={{ color: "#3BB77E" }} href="https://github.com/Heezol06"><GitHub></GitHub></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 text-end">
                        <h5 className='primary-clr fw-bold'>Our Team</h5>
                        <Typography variant="h2" gutterBottom component="div">
                            Meet Our Expert Team
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.
                        </Typography>
                        <br />
                        <br />
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.
                        </Typography>
                        <Button variant="contained" className='primary-bg'>View All Members</Button>
                    </div>
                </div>
            </div>
            <div className="container d-flex header-bg my-5 rounded">
                <div className="col-lg-6">
                    <img src="http://wp.alithemes.com/html/nest/demo-rtl/assets/imgs/banner/banner-13.png" className='stay-home-bnr-img' alt="" />
                </div>
                <div className="col-lg-6 py-5">
                    <Typography variant="h3" gutterBottom component="div">
                        Stay home & get your daily
                        needs from our shop
                    </Typography>
                    <Typography variant="subtaitle1" gutterBottom component="div">
                        Start You'r Daily Shopping with Nest Mart
                    </Typography>
                    <TextField
                        id="input-with-icon-textfield"
                        label="Your Email Address"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                    />
                    <Button variant="contained" className='primary-bg my-1'>Subscribe</Button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;