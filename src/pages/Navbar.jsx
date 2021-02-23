import React from 'react';
import {AppBar, Toolbar, Typography, Button, makeStyles} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appbar: {
        fontSize: 12,
        justifyContent: 'center',
        color: "red"
    },
    
    
  }));

const Navbar = () => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                Zhao Yuan
                </Typography>
                <Button color="inherit">Home</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Experiences</Button>
                <Button color="inherit">Abilities</Button>
                <Button color="inherit">Hobbies</Button>
                <Button color="inherit">Contact</Button>
            </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;