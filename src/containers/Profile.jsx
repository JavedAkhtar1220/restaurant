import React from 'react';
import img from '../images/profile/profile.jpg';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import Divider from '@material-ui/core/Divider';
import SettingsIcon from '@material-ui/icons/Settings';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ReceiptIcon from '@material-ui/icons/Receipt';
import HelpOutlineSharpIcon from '@material-ui/icons/HelpOutlineSharp';
import MenuBookIcon from '@material-ui/icons/MenuBook';

import '../styles/profile.css';

const Profile = () => {
    return (
        <div style={{ overflowX: 'hidden' }}>
            <div className="row mt-5 mb-5">
                <div className="col-lg-8 col-md-8 col-sm-10 col-10 mx-auto">
                    <div className="row">
                        <div className="col-lg-6 col-md-8 col-sm-10 mx-auto">
                            <h1 className="profile_head mt-4 mb-5">My Profile</h1>
                            <div style={{ textAlign: '-webkit-center' }}>
                                <div className="profile_container">
                                    <img src={img} alt="profile" className="profile_pic" />
                                    <input type="file" className="inp_img" />
                                    <button className="uploadBtn"><CameraAltIcon /></button>
                                </div>
                            </div>
                            <form action="" className="mt-5">
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
                                <button className="btn_login btn-primary">Update Profile</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-5">
                    <div className="row">
                        <div className="col-10 m-auto">
                            <List style={{ backgroundColor: "#f7f7f7" }}>
                                <ListItem button >
                                    <ListItemIcon><ReceiptIcon /></ListItemIcon>
                                    <ListItemText primary="Your Orders" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon><MenuBookIcon /></ListItemIcon>
                                    <ListItemText primary="Credits, promos & gift cards" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon><HelpOutlineSharpIcon /></ListItemIcon>
                                    <ListItemText primary="Help" />
                                </ListItem>
                                <Divider />
                                <ListItem button >
                                    <ListItemIcon><SettingsIcon /></ListItemIcon>
                                    <ListItemText primary="Your account settings" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon><LocationOnIcon /></ListItemIcon>
                                    <ListItemText primary="Addresses" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon><CreditCardIcon /></ListItemIcon>
                                    <ListItemText primary="Payment methods" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon><NotificationsIcon /></ListItemIcon>
                                    <ListItemText primary="Notifications" />
                                </ListItem>
                            </List>
                        </div>
                    </div>
                    {/* <List className="bg-info">
                        <ListItem button >
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary="HOME" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><MenuBookIcon /></ListItemIcon>
                            <ListItemText primary="CUISINES" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><SearchIcon /></ListItemIcon>
                            <ListItemText primary="SEARCH" />
                        </ListItem>
                        <ListItem button >
                            <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
                            <ListItemText primary="CART" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><PermIdentityIcon /></ListItemIcon>
                            <ListItemText primary="PROFILE" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><LocalShippingIcon /></ListItemIcon>
                            <ListItemText primary="ORDERS" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><PersonAddIcon /></ListItemIcon>
                            <ListItemText primary="SIGNUP" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><InputIcon /></ListItemIcon>
                            <ListItemText primary="LOGIN" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                            <ListItemText primary="LOGOUT" />
                        </ListItem>
                    </List> */}
                </div>
            </div>
        </div >)
}

export default Profile;