import React, { useState, useContext } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Drawer, List, Divider, ListItem, Typography, Avatar } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import BuildIcon from '@material-ui/icons/Build';
import MailIcon from '@material-ui/icons/Mail';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DescriptionIcon from '@material-ui/icons/Description';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      flexShrink: 0,
      textAlign: 'left',
      '& .MuiAvatar-root': {
        height: 50,
        width: 50,
        margin: 30,
      },
    },
    drawerPaper: {
      width: '30vw',
    },
    '@media (max-width: 600px)': {
      drawerPaper: {
        width: '60vw',
      },
    }
  }),
);

interface DraweMenuProps {
    open: boolean;
    setOpen: () => void;
  }

const DrawerNav = () => {

}