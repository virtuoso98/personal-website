import React, { useState, setState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Grid, IconButton, Link } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import BuildIcon from '@material-ui/icons/Build';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

const useStyles = makeStyles((theme) => ({
  headerSection: {
    display: 'flex',
    textAlign: 'left',
    alignItems: 'center',
    '& .MuiSvgIcon-root': {
      paddingRight: 10,
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

  drawerPaper: {
    backgroundColor: 'pink',
    paddingRight: '20px',
    '& .MuiTypography-root': {
      color: 'black',
      fontFamily: 'DotGothic16',
      fontWeight: 'fontWeightBold',
      fontSize: 18,

      '&.MuiLink-underlineHover:hover': {
        textDecoration: 'none',
        color: 'black',
      }
    }
  },
}));


const DrawerNav = (props) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  }

  return (
    <Grid container spacing={0}>
      <Grid item xs={10} className={classes.headerSection}>
        <IconButton onClick={() => toggleDrawer()}>
          <MenuIcon />
        </IconButton>
        <Drawer
          variant="temporary"
          open={open}
          onClose={() => toggleDrawer()}
          classes={{
            paper: classes.drawerPaper
          }}
          anchor="left"
        >
          <List>
            <div
            onClick={()=>toggleDrawer()}
            >
            <Link href="#home">
              <ListItem>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
            <Link href="#about">
              <ListItem>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItem>
            </Link>
            <Link href="#experiences">
              <ListItem>
                <ListItemIcon>
                  <WorkIcon />
                </ListItemIcon>
                <ListItemText primary="Experience" />
              </ListItem>
            </Link>
            <Link href='#research'>
              <ListItem>
                <ListItemIcon>
                  <LibraryBooksIcon />
                </ListItemIcon>
                <ListItemText primary="Research" />
              </ListItem>
            </Link>
            <Link href="#projects">
              <ListItem>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Projects" />
              </ListItem>
            </Link>
            </div>
          </List>
          
        </Drawer>
      </Grid>
      <Grid item xs={2} className={classes.buttonSection}>
        <IconButton href='https://github.com/virtuoso98/' target='_blank' rel='noopener' aria-label='GitHub'>
          <GitHubIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default DrawerNav;