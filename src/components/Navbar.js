import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from '@material-ui/core/Drawer';
import {
    AppBar,
    Toolbar,
    ListItem,
    ListItemIcon,

    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
} from '@material-ui/core';
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from '@material-ui/icons';

import avatar from '../images/profileavatar.png';

import Footer from './Footer';

// CSS STYLES

const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%"
    },

    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },

    listItem: {
        color: "tan",

    },

    listItemColorText: {
        color: "tan"
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/"

    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio",
        listPath: "/portfolio"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contact",
        listPath: "/contacts"
    },
]


const Navbar = () => {

    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = (slider, open) => () => {
        setState({ ...state, [slider]:open });
    };

    const classes = useStyles();

    const sideList = slider => (

        <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider, false)}>
            <Avatar className={classes.avatar} src={avatar} alt="image" />
            <Divider />

            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.listItemColorText} primary={lsItem.listText} />
                    </ListItem>

                ))};
            </List>

        </Box>

    )
    return (
        <div>

            <Box component="nav">
                <AppBar position="static" style={{ background: "#222", height: "150px" }}>

                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <ArrowBack style={{ background: "tomato", borderRadius: "30px", marginTop: "45px"}} />
                        </IconButton>
                        <Typography onClick={toggleSlider("right", true)} variant="h5" style={{ color: "tan", cursor: "pointer", marginTop: "45px", fontSize: "50px"}}>
                            Menu
                    </Typography>
                    <MobileRightMenuSlider anchor="right" open={state.right} onClose={toggleSlider("right", false)}>
                        {sideList('right')}
                        <Footer />
                        
                    </MobileRightMenuSlider>

                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Navbar;
