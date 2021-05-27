import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import '../styles/footer.css';

const Footer = () => {
    return (
        <div className="footer py-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-12 mb-4">
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
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <h1 className="footer_head">Stay Connected</h1>
                        <div>
                            <IconButton aria-label="facebook">
                                <FacebookIcon className="social_icon" />
                            </IconButton>
                            <IconButton aria-label="twitter">
                                <TwitterIcon className="social_icon" />
                            </IconButton>
                            <IconButton aria-label="youtube">
                                <YouTubeIcon className="social_icon" />
                            </IconButton>
                            <IconButton aria-label="instagram">
                                <InstagramIcon className="social_icon" />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;