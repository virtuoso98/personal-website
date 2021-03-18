import React, { useState, setState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, Typography, Grid, Button, IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import BuildIcon from '@material-ui/icons/Build';
import MailIcon from '@material-ui/icons/Mail';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DescriptionIcon from '@material-ui/icons/Description';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';


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


const DrawerNav = (props) => {
  const classes = useStyles();

  const toggleDrawer = () => {
    console.log("clicked")
  }

  const list = (anchor) => {
    <div
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <List>
        <ListItem>
          
        </ListItem>
      </List>
    </div>
  }

  return (
    <Grid container spacing={0}>
      <React.Fragment>
      <Grid item xs={10} className={classes.headerSection}>
        <IconButton onClick={toggleDrawer()}>
          <MenuIcon />
        </IconButton>
      </Grid>
      </React.Fragment>
      <Grid item xs={2} className={classes.buttonSection}>
        <Button href='https://github.com/virtuoso98/' target='_blank' rel='noopener' aria-label='GitHub'>
          <GitHubIcon />
        </Button>
      </Grid>
    </Grid>
  )
}

export default DrawerNav;