import React, { useState, useContext } from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    expandingButton: {
        fontFamily: 'Lora',
        backgroundColor: '#212529',
        boxShadow: 
        '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
        fontSize: "1.2rem",
        padding: "12px",
        border: "0",
        borderRadius: "50px",
        cursor: "pointer",

        // flexbox
        display: "flex",
        alignItems: "center",

        // 2 * padding + border radius
        maxWidth: "74px",

        // animation
        WebkitTransition: `max-width 1s`,
        transition: `max-width 1s`,

        '&:hover': {
            maxWidth: "205px",
        },
        
        buttonText: {
            color: "white",
            margin: "12px", // same as button padding,
            whiteSpace: "nowrap",
            textTransform: "uppercase",
    
            // hide text before house hover
            maxWidth: "0",
            overflow: "hidden",
    
            // animation
            WebkitTransition: `max-width 1s`,
            transition: `max-width 1s`,
    
            '&:hover': {
                maxWidth: "100%",
            },
        }
    },
  }));

const ExpandButton = ({icon, text}) => {
    const classes = useStyles();


    return(
        <button className={classes.expandingButton}>
            {icon}<span className={classes.expandingButton.buttonText}>
                {text}
            </span>
        </button>
    )
}
export default ExpandButton;