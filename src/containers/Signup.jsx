import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Header from '../components/Header';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Search } from "@trejgun/material-ui-icons-google";

const Signup = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [confirmShowPassword, setConfirmShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        if (showPassword === true) {
            setShowPassword(false);
        }
        else {
            setShowPassword(true);
        }
    }

    const handleClickConfirmShowPassword = () => {
        if (confirmShowPassword === true) {
            setConfirmShowPassword(false);
        }
        else {
            setConfirmShowPassword(true);
        }
    }

    return (
        <div style={{ overflowX: 'hidden' }}>
            <Header />
            <div className="row mt-5 mb-5">
                <div className="col-lg-6 col-md-8 col-sm-10 col-12 mx-auto">
                    <div className="row mt-5">
                        <div className="col-10 mx-auto">
                            <h1 className="auth_head mt-4">New<span style={{ color: "#37a000" }}>Co</span></h1>
                            <div className="mt-5">
                                <h1 className="auth_subhead">Let's get started</h1>
                            </div>
                            <form className="mt-5">
                                <div className="mb-4">
                                    <div className="position-relative">
                                        <PersonIcon className="auth_icon" />
                                        <input
                                            className="inp_login"
                                            type="text"
                                            placeholder="Your Name"
                                        />
                                        < span className="border_bottom"></span>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="position-relative">
                                        <MailIcon className="auth_icon" />
                                        <input className="inp_login" type="text" placeholder="Your Email" />
                                        <span className="border_bottom"></span>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="position-relative">
                                        <IconButton className="btn_showpassword" onClick={handleClickShowPassword}>
                                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                        </IconButton>
                                        <LockIcon className="auth_icon" />
                                        <input
                                            className="inp_login"
                                            placeholder="Password"
                                            type={showPassword ? 'text' : 'password'}
                                        />
                                        <span className="border_bottom"></span>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="position-relative">
                                        <IconButton className="btn_showpassword" onClick={handleClickConfirmShowPassword}>
                                            {confirmShowPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                        </IconButton>
                                        <LockIcon className="auth_icon" />
                                        <input
                                            className="inp_login"
                                            placeholder="Repeat Your Password"
                                            type={confirmShowPassword ? 'text' : 'password'}
                                        />
                                        <span className="border_bottom"></span>
                                    </div>
                                </div>
                                <button className="btn_login btn-primary" type="submit">Signup</button>
                                <div className="text-right mt-2">
                                    <p>Already a member? <Link to='/login'>Login</Link></p>
                                </div>
                            </form>
                            <div className="my-4">
                                <div class="separator text-muted">or</div>
                            </div>
                            <div>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<FacebookIcon />}
                                    size='large'
                                    className="w-100 mb-2"
                                    style={{ backgroundColor: "#405993", color: "white" }}
                                >
                                    Continue With Facebook
                                </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<Search />}
                                    size='large'
                                    className="w-100"
                                    style={{ backgroundColor: "#4e86ec", color: "white" }}
                                >
                                    Continue With Google
                                </Button>
                                {/* <button className="btn_login btn-primary mb-3"><VisibilityIcon /> Continue With Facebook</button>
                                <button className="btn_login btn-primary mb-3"><VisibilityIcon /> Continue With Google</button> */}

                            </div>
                            <p className="mt-3">By creating the account, you agree to the <Link to='/'>Terms of Use</Link> and <Link to='/'>Privacy Policy</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;