import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  expandingButton: {
    fontFamily: 'Lora',
    marginRight: '2vw',
    backgroundColor: styleProps => styleProps.color,
    boxShadow:
      '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
    border: 'none',
    fontSize: '1.2rem',
    padding: '12px',
    border: 0,
    borderRadius: '50px',
    cursor: 'pointer',
    // flexbox
    display: 'flex',
    alignItems: 'center',

    // 2 * padding + border radius
    maxWidth: '74px',

    // animation
    WebkitTransition: 'max-width 1s',
    transition: 'max-width 1s',

    '&:focus': {
      outline: 'none',
    },

    '&:hover': {
      maxWidth: '205px',
      '& span': {
        maxWidth: '100%',
      }
    },

    '& span': {
      color: 'white',
      margin: '12px', // same as button padding,
      whiteSpace: 'nowrap',
      textTransform: 'uppercase',
      boxShadow: 'none',

      // hide text before house hover
      maxWidth: 0,
      overflow: 'hidden',

      // animation
      WebkitTransition: 'max-width 1s',
      transition: 'max-width 1s',
    },
  },
}));

const ExpandButton = ({ icon, text, color }) => {
  const styleProps = {
    color: color
  }
  const classes = useStyles(styleProps);


  return (
    <button className={classes.expandingButton}>
      <img src={icon} width="50" />
      <span>
        {text}
      </span>
    </button>
  )
}
export default ExpandButton;