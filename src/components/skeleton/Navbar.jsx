import React, {useState, useContext} from 'react';
import {AppBar, Toolbar, Typography, Button, Grid, Avatar, IconButton, Hidden} from '@material-ui/core';
import { Theme, makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerNav from './DrawerNav';

const useStyles = makeStyles((theme) => ({
    appbar: {
        justifyContent: 'center',
        backgroundColor: "pink",
        flexGrow: 1,
        position: 'fixed',
    },
    headerSection:{
        display: 'flex',
        textAlign: 'left',
        alignItems: 'center',
        '& .MuiSvgIcon-root': {
            paddingRight: 10,
          },
          '& .MuiTypography-root': {
            fontFamily: 'DotGothic16',
            fontWeight: 500,
          }
    },
    buttonSection:{
        display: 'flex',
        textAlign: 'right',
        alignItems: 'center',
        justifyContent: 'flex-end',
        '& .MuiButton-root': {
            marginRight: 20,
            '& .MuiTypography-root': {
                color: "black",
                fontFamily: 'DotGothic16',
                fontWeight: 'fontWeightBold',
                transition: 'transform 0.7s',
                fontSize: 18,
                '&:hover': {
                    transform: 'scale(1.1)',
                    color: "white"
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
                            <Button href='https://github.com/virtuoso98/' target='_blank' rel='noopener' aria-label='GitHub'>
                                <GitHubIcon />
                                <Typography variant="h6" component = 'h1'>
                                    virtuoso98
                                </Typography>
                            </Button>
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
                                <Typography>Projects</Typography>
                            </Button>
                            <Button color="inherit">
                                <Typography>Abilities</Typography>
                            </Button>
                            <Button color="inherit">
                                <Typography>Hobbies</Typography>
                            </Button>
                        </Grid>
                        <Grid item xs = {1}></Grid>
                    </Hidden>
                    <Hidden lgUp >
                        <Grid item xs = {8} className={classes.headerSection}>
                            <IconButton onClick = {handleMenuOpen}>
                                <MenuIcon />
                                <DrawerNav />
                            </IconButton>
                            <Typography variant="h6">To be built</Typography>
                        </Grid>
                        <Grid item xs = {3}></Grid>
                        <Grid item xs = {1} className = {classes.buttonSection}>
                        </Grid>
                    </Hidden>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;