import React, {useState, useContext} from 'react';
import {AppBar, Toolbar, Typography, Button, Grid, Avatar, IconButton, Hidden} from '@material-ui/core';
import { Theme, makeStyles } from '@material-ui/core/styles';
import avatar from '../assets/images/avatar.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
    appbar: {
        fontSize: 12,
        justifyContent: 'center',
        backgroundColor: "pink",
        flexGrow: 1
    },
    headerSection:{
        display: 'flex',
        textAlign: 'left',
        alignItems: 'center',
        '& .MuiAvatar-root': {
            marginRight: 20,
          },
    },
    buttonSection:{
        display: 'flex',
        textAlign: 'right',
        alignItems: 'center',
        justifyContent: 'flex-end',
        '& .MuiButton-root': {
            marginRight: 20,
            '& .MuiTypography-root': {
                transition: 'transform 0.4s',
                fontSize: 16,
                '&:hover': {
                    transform: 'scale(1.2)',
                },
            },
        }      
    },
    menuButton: {
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      },
  }));

const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleMenuOpen = () => {
        setOpen(!open);
    }

    return(
        <AppBar position="static" className={classes.appbar}>
            <Toolbar>
                <Grid container spacing = {0}>
                    <Hidden mdDown>
                        <Grid item xs = {1}></Grid>
                        <Grid item xs = {2} className ={classes.headerSection}>
                            <Avatar alt = "Koa Zhao Yuan" src = {avatar}></Avatar>
                            <Typography variant="h6" component = 'h1'>
                                Zhao!
                            </Typography>
                        </Grid>
                        <Grid item xs = {8} className = {classes.buttonSection}>
                            <Button color="inherit">
                                <Typography>Home</Typography>
                            </Button>
                            <Button color="inherit">
                                <Typography>About</Typography>
                            </Button>
                            <Button color="inherit">
                                <Typography>Experiences</Typography>
                            </Button>
                            <Button color="inherit">
                                <Typography>Abilities</Typography>
                            </Button>
                            <Button color="inherit">
                                <Typography>Hobbies</Typography>
                            </Button>
                            <Button color="inherit">
                                <Typography>Resume</Typography>
                            </Button>
                            <Button color="inherit">
                                <Typography>Contact</Typography>
                            </Button>
                            <IconButton href='https://github.com/virtuoso98/' target='_blank' rel='noopener' aria-label='GitHub'>
                                <GitHubIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs = {1}></Grid>
                    </Hidden>
                    <Hidden lgUp >
                        <Grid item xs = {8} className={classes.headerSection}>
                            <IconButton onClick = {handleMenuOpen}>
                                <MenuIcon />
                                
                            </IconButton>
                            <Typography variant="h6">To be built</Typography>
                        </Grid>
                        <Grid item xs = {3}></Grid>
                        <Grid item xs = {1} className = {classes.buttonSection}>
                            <Avatar alt = "Koa Zhao Yuan" src = {avatar}></Avatar>
                        </Grid>
                    </Hidden>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;