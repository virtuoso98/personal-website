import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import ExperienceCard from '../utility/ExperienceCard';
import campus from '../../assets/images/campus.jpg'; 
import mystery from '../../assets/images/mystery.jpg'; 
import nyjc from '../../assets/images/nyjc.png'; 
import smartjen from '../../assets/images/smartjen.png'; 

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
        backgroundColor: '#ffe6f3',
    },
  }),
);

const Experiences = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={3} className={classes.root} id="experiences">
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
                <Typography variant="h2">
                    Experiences
                </Typography>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
                <ExperienceCard 
                image={nyjc}
                />
            </Grid>
            <Grid item xs={4}>
                <ExperienceCard 
                image={campus}
                />
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
                <ExperienceCard 
                image={smartjen}
                />
            </Grid>
            <Grid item xs={4}>
                <ExperienceCard 
                image={mystery}
                />
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    )
}

export default Experiences;