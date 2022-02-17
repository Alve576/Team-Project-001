import { Typography } from '@mui/material';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



const ContactUs = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nx3m7h6', 'template_iiqmvyc', e.target, 'user_gMTsEXepOjxBr7dInIGlo')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        alert('Thanks For Contact With Us.')
    };
    return (
        <div>
            <Typography style={{ borderBottom: "2px solid" }} className="primary-clr d-inline-block" variant="h3" gutterBottom component="div">
                Contact Us
            </Typography>
            <div className="container d-flex">
                <div className="col-lg-6 text-start">
                    <Typography className="primary-clr" variant="h4" gutterBottom component="div">
                        Contact form
                    </Typography>
                    <Typography className="" variant="h2" gutterBottom component="div">
                        Drop Us a Line
                    </Typography>
                    <Typography className="mb-5" variant="subtitle2" gutterBottom component="div">
                        Your email address will not be published. Required fields are marked *
                    </Typography>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-3">
                            <div className="input-group input-group-sm mb-3">
                                <span className="input-group-text" name="user_name" id="inputGroup-sizing-sm"><i className="fas fa-user"></i></span>
                                <input type="text" className="form-control" name="user_name" placeholder='First Name,Last Name*' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <div className="input-group input-group-sm mb-3">
                                <span className="input-group-text" name="user_name" id="inputGroup-sizing-sm"><i className="fas fa-envelope"></i></span>
                                <input type="email" className="form-control" name="user_email" placeholder='Your Email Address*' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <div className="input-group input-group-sm mb-3">
                                <span className="input-group-text" name="user_name" id="inputGroup-sizing-sm"><i className="fas fa-phone-alt"></i></span>
                                <input type="text" className="form-control" placeholder='Your Phone' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <textarea className="form-control" name="message" placeholder='Your Message' id="exampleFormControlTextarea1" rows="3"></textarea>
                            <input type="submit" className="btn primary-btn-1 text-light mt-4 primary-bg" value="Send Message" />
                        </div>
                    </form>
                </div>
                <div className="col-lg-6">
                    <img src="http://wp.alithemes.com/html/nest/demo-rtl/assets/imgs/page/contact-2.png" className='w-75' style={{ borderRadius: "15px" }} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;