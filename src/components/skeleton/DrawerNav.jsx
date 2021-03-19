import React, { useState, setState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Grid, Button, IconButton, Link } from '@material-ui/core';
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
    '& .MuiTypography-root': {
      fontFamily: 'DotGothic16 !important',
      color: 'black',
      fontWeight: 'fontWeightBold',
      transition: 'transform 0.7s',
      fontSize: 18,
    },
    '& .MuiListItemText-root': {
      fontFamily: 'DotGothic16 !important',
      color: 'black',
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
        >
          <Link>
            <List>
              <ListItem>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home"/>
              </ListItem>
            </List>
          </Link>
          <Link>
            <List>
              <ListItem>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="About"/>
              </ListItem>
            </List>
          </Link>
          <Link>
            <List>
              <ListItem>
                <ListItemIcon>
                  <WorkIcon />
                </ListItemIcon>
                <ListItemText primary="Experience"/>
              </ListItem>
            </List>
          </Link>
          <Link>
            <List>
              <ListItem>
                <ListItemIcon>
                  <LibraryBooksIcon/>
                </ListItemIcon>
                <ListItemText primary="Research"/>
              </ListItem>
            </List>
          </Link>
          <Link>
            <List>
              <ListItem>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Projects"/>
              </ListItem>
            </List>
          </Link>
        </Drawer>
      </Grid>
      <Grid item xs={2} className={classes.buttonSection}>
        <Button href='https://github.com/virtuoso98/' target='_blank' rel='noopener' aria-label='GitHub'>
          <GitHubIcon />
        </Button>
      </Grid>
    </Grid>
  )
}

export default DrawerNav;