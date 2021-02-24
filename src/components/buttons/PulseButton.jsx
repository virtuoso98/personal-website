import React, { useState, useContext } from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Lora',
    color: '#fff',
    fontSize: '0.9375rem',
    padding: '8px 40px',
    borderRadius: '4px',
    border: '0',
    cursor: 'pointer',
    boxShadow: `0 0 0 0 ${theme.palette.primary.main}80`,
    animation: `$pulse 1.5s ease infinite`,
    margin: '45px 20px',
    zIndex: 2,
    '& .MuiSvgIcon-root': {
      paddingRight: 8,
    }
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(0.85)',
    },
    '75%': {
      transform: 'scale(1)',
      boxShadow: `0 0 0 15px ${theme.palette.primary.main}00`,
    },
    '100%': {
      transform: 'scale(0.85)',
      boxShadow: `0 0 0 0 ${theme.palette.primary.main}00`,
    },
  }
}));

const PulseButton = ({buttonText, icon}) => {

  const classes = useStyles();
  return (
    <Button className={classes.root} color="primary" variant="contained">
      {icon} {buttonText}
    </Button>
  )
}

export default PulseButton;