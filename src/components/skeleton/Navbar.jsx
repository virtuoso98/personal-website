import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, IconButton, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerNav from './DrawerNav';

const useStyles = makeStyles((theme) => ({
  appbar: {
    justifyContent: 'center',
    backgroundColor: 'pink',
    flexGrow: 1,
    position: 'fixed',
  },
  headerSection: {
    display: 'flex',
    textAlign: 'left',
    alignItems: 'center',
    '& .MuiSvgIcon-root': {
      paddingRight: 10,
    },
    '& .MuiTypography-root': {
      fontFamily: 'DotGothic16 !important',
      color: 'black',
      fontWeight: 'fontWeightBold',
      transition: 'transform 0.7s',
      fontSize: 18,
    },
    '& .MuiButton-root': {
      '&:hover': {
        '& .MuiSvgIcon-root': {
          color: 'white',
          transform: 'scale(1.1)',
        },
        '& .MuiTypography-root': {
          transform: 'scale(1.05)',
          color: 'white',
        },
      },
    },
  },
  buttonSection: {
    display: 'flex',
    textAlign: 'right',
    alignItems: 'center',
    justifyContent: 'flex-end',
    '& .MuiButton-root': {
      marginRight: 20,
      '& .MuiTypography-root': {
        color: 'black',
        fontFamily: 'DotGothic16',
        fontWeight: 'fontWeightBold',
        transition: 'transform 0.7s',
        fontSize: 18,
        '& a': {
          textDecoration: 'none',
          color: 'black',
        },
        '&:hover': {
          transform: 'scale(1.1)',
          '& a': {
            textDecoration: 'none',
            color: 'white',
            transform: 'scale(1.1)',
          },
        },
      },
    },
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

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        <Grid container spacing={0}>
          <Hidden smDown>
            <Grid item xs={1}></Grid>
            <Grid item xs={2} className={classes.headerSection}>
              <Button href='https://github.com/virtuoso98/' target='_blank' rel='noopener' aria-label='GitHub'>
                <GitHubIcon />
                <Typography variant="h6" component='h1'>
                  virtuoso98
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={8} className={classes.buttonSection}>
              <Button color="inherit">
                <Typography><a href="#home">Home</a></Typography>
              </Button>
              <Button color="inherit">
                <Typography><a href="#about">About</a></Typography>
              </Button>
              <Button color="inherit">
                <Typography><a href="#experiences">Experiences</a></Typography>
              </Button>
              <Button color="inherit">
                <Typography><a href="#research">Research</a></Typography>
              </Button>
              <Button color="inherit">
                <Typography><a href="#projects">Projects</a></Typography>
              </Button>
            </Grid>
            <Grid item xs={1}></Grid>
          </Hidden>
          <Hidden mdUp>
            <DrawerNav />
          </Hidden>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;