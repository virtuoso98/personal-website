import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import ExperienceCard from '../cards/ExperienceCard';
import campus from '../../assets/images/campus.jpg'; 
import mystery from '../../assets/images/mystery.jpg'; 
import nyjc from '../../assets/images/nyjc.png'; 
import smartjen from '../../assets/images/smartjen.png'; 

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
        paddingTop: '6vh',
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
                name="Nanyang Junior College"
                position="GCE 'A' Levels Graduate"
                date="Jan 2015 - Nov 2016"
                description=
                "My time here was truly enjoyable. Be it engaging in olympiads, playing chess games or studying, this school has given me a great sense of community."
                />
            </Grid>
            <Grid item xs={4}>
                <ExperienceCard 
                image={campus}
                name="Yale-NUS College"
                position="Undergraduate"
                date="Aug 2020 - May 2023"
                description=
                "Liberal Arts student by day, Coder by night. This school gave me the freedom to explore my diverse interests!"
                />
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
                <ExperienceCard 
                image={smartjen}
                name="SmartJen"
                position="R&D OCR Intern"
                date="Dec 2020- Jan 2021"
                description="I interned here for a month from Dec 2020 to Jan 2021 in the R&D OCR Team. I implemented a character segmentation algorithm for handwritten mathematical expressions"
                />
            </Grid>
            <Grid item xs={4}>
                <ExperienceCard 
                image={mystery}
                name="Future you"
                position="To be confirmed"
                date="In the future"
                description="Want to be featured here on this website? Hire me now!"
                />
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    )
}

export default Experiences;