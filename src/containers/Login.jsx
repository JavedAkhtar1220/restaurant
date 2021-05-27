import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Button from '@material-ui/core/Button';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Search } from "@trejgun/material-ui-icons-google";
import '../styles/auth.css';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        if (showPassword === true) {
            setShowPassword(false);
        }
        else {
            setShowPassword(true);
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
                                <h1 className="auth_subhead">Welcome Back</h1>
                            </div>
                            <form action="" className="mt-5">
                                <div className="mb-4">
                                    <div className="position-relative">
                                        <MailIcon className="auth_icon" />
                                        <input className="inp_login" type="text" placeholder="Enter email" />
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
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Enter password" />
                                        <span className="border_bottom"></span>
                                    </div>
                                    <div className="text-right mt-2">
                                        <Link to='/resetpassword'>Forgot Password?</Link>
                                    </div>
                                </div>
                                <button className="btn_login btn-primary">Login</button>
                                <div className="text-right mt-2">
                                    <p>New member? <Link to='/signup'>Signup</Link></p>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;