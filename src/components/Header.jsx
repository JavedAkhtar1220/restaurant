import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Badge from '@material-ui/core/Badge';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CloseIcon from '@material-ui/icons/Close';
import InputIcon from '@material-ui/icons/Input';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import '../styles/header.css';
import '../App.css';




const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    appBar: {
        boxShadow: 'none',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}));

export default function Header() {
    const classes = useStyles();
    const [state, setState] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [headerIcon, setHeaderIcon] = useState(true);
    const history = useHistory();

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(open);
    };

    const list = (left) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: left === 'top' || left === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    <CloseIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
                <ListItem button onClick={gotoHome}>
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
                <ListItem button onClick={gotoCart}>
                    <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
                    <ListItemText primary="CART" />
                </ListItem>
                <ListItem button onClick={gotoProfile}>
                    <ListItemIcon><PermIdentityIcon /></ListItemIcon>
                    <ListItemText primary="PROFILE" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon><LocalShippingIcon /></ListItemIcon>
                    <ListItemText primary="ORDERS" />
                </ListItem>
                <ListItem button onClick={gotoSignup}>
                    <ListItemIcon><PersonAddIcon /></ListItemIcon>
                    <ListItemText primary="SIGNUP" />
                </ListItem>
                <ListItem button onClick={gotoLogin}>
                    <ListItemIcon><InputIcon /></ListItemIcon>
                    <ListItemText primary="LOGIN" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                    <ListItemText primary="LOGOUT" />
                </ListItem>
            </List>
        </div>
    );

    const gotoLogin = () => {
        history.push('/login');
    }

    const gotoSignup = () => {
        history.push('/signup');
    }

    const gotoProfile = () => {
        history.push('/profile');
    }

    const gotoCart = () => {
        history.push('/cart');
    }

    const gotoHome = () => {
        history.push('/');
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth < 600) {
            setHeaderIcon(false);
        }
        else {
            setHeaderIcon(true);
        }
    })

    // window.addEventListener('scroll', () => {
    //     if (window.scrollY > 100) {
    //         setNavColor('#90caf9');
    //     }
    //     else {
    //         setNavColor('transparent');
    //     }
    // })


    return (
        <div>
            <React.Fragment>

                <AppBar
                    position="fixed"
                    className={classes.appBar}
                // style={{ backgroundColor: navColor }}
                >
                    <div className='promotion'>
                        <marquee behavior="" direction="right" className="small">50% sell on everythings grap it now</marquee>
                    </div>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer(true)}
                            edge="start"
                            className={clsx(classes.menuButton, open)}
                        >

                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            NewCo
                        </Typography>
                        {headerIcon ? <div className="ml-auto">
                            <Button
                                variant="contained"
                                className="mx-2"
                                color="primary"
                                onClick={gotoCart}
                                endIcon={<Badge badgeContent={8} color="primary">
                                    <ShoppingCartIcon />
                                </Badge>}

                            >
                                Cart
                            </Button>

                            {/* </Button> */}
                            <Button
                                variant="contained"
                                className="mx-2"
                                color="secondary"
                                startIcon={<PersonAddIcon />}
                                style={{ marginLeft: 'auto' }}
                                onClick={gotoSignup}
                            >
                                signup
                            </Button>
                            <Button
                                variant="contained"
                                className="mx-2"
                                color="secondary"
                                startIcon={<InputIcon />}
                                style={{ marginLeft: 'auto' }}
                                onClick={gotoLogin}
                            >
                                Login
                            </Button>
                        </div> : null}

                    </Toolbar>
                </AppBar>
                <Drawer anchor='left' open={state} onClose={toggleDrawer(false)}>
                    {list('left')}
                </Drawer>
            </React.Fragment>
        </div >
    );
}
