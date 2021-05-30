import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import '../styles/footer.css';

const Footer = () => {
    return (
        <div className="footer py-3">
            <img src="https://cdn.dribbble.com/users/4814011/screenshots/9982469/dabbble1.png" alt="asda" className="img_footer" />
            <div className="container my-3">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-12 col-12 mb-4">
                        <h1 className="footer_head">Become a restaurant partner</h1>
                        <p className="mb-0 text-white">If you're a restaurant owner....</p>
                        <div className="mt-4">
                            <h1 className="footer_head">Support</h1>
                            <div>
                                <Link to='/' className='support'>About Us</Link>
                            </div>
                            <div>
                                <Link to='/' className='support'>Contact Us</Link>
                            </div>
                            <div>
                                <Link to='/' className='support'>Why Us?</Link>
                            </div>
                            <div>
                                <Link to='/' className='support'>Terms and Conditions</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 col-12 mb-4">
                        <h1 className="footer_head">Signup for Special offers</h1>
                        <form action="" className="mt-3">
                            <div className="mb-3">
                                <label htmlFor="email" className="text-white">Email Address</label>
                                <input type="text" className="form-control" placeholder="Enter email address" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="zip" className="text-white">ZIP Code</label>
                                <input type="number" className="form-control" placeholder="Enter ZIP code" />
                            </div>
                            <button className="btn btn-primary form-control">Count me in</button>
                        </form>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 col-12">
                        <h1 className="footer_head">Stay Connected</h1>
                        <div>
                            <IconButton aria-label="facebook" className='btn_social mr-2'>
                                <FacebookIcon className="social_icon" />
                            </IconButton>
                            <IconButton aria-label="twitter" className='btn_social mr-2'>
                                <TwitterIcon className="social_icon" />
                            </IconButton>
                            <IconButton aria-label="youtube" className='btn_social mr-2'>
                                <YouTubeIcon className="social_icon" />
                            </IconButton>
                            <IconButton aria-label="instagram" className='btn_social'>
                                <InstagramIcon className="social_icon" />
                            </IconButton>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 col-12">
                        <h1 className="footer_head">How It Works</h1>
                        <p className="mb-0 text-white small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius amete.</p>
                        <h1 className="footer_head mt-3">Why Us?</h1>
                        <p className="mb-0 text-white small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius amete.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;