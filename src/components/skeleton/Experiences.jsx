import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, GridList, Typography } from '@material-ui/core';
import ExperienceCard from '../cards/ExperienceCard';
import campus from '../../assets/images/campus.jpg';
import mystery from '../../assets/images/mystery.jpg';
import nyjc from '../../assets/images/nyjc.png';
import smartjen from '../../assets/images/smartjen.png';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: '50px',
    },
    divider: {
      marginTop: '100px',
    },
    '@media only screen and (max-width:600px)': {
      root: {
        '& .MuiTypography-h2': {
          fontSize: '3rem',
        },
      },

    },
  }),
);

const Experiences = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={classes.root} id="experiences">
      <Grid item xs={1} lg={2}></Grid>
      <Grid item xs={10} lg={8}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h2">
              Experiences
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ExperienceCard
              image={nyjc}
              name="Nanyang Junior College"
              position="GCE 'A' Levels Graduate"
              date="Jan 2015 - Nov 2016"
              description=
              "In my stay here. I engaged in olympiads, chess and running of the library. Beyond these opportunities, the community was also great and accepting."
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ExperienceCard
              image={campus}
              name="Yale-NUS College"
              position="Undergraduate"
              date="Aug 2020 - May 2023"
              description=
              "Liberal Arts student by day, Coder by night. This school gave me free reign to explore modules in Philosophy, Literature and Modern Social Thought."
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ExperienceCard
              image={smartjen}
              name="SmartJen"
              position="R&D Intern"
              date="Dec 2020- Jan 2021"
              description="I implemented a character segmentation algorithm for handwritten mathematical expressions and deployed a working prototype on Flask."
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ExperienceCard
              image={mystery}
              name="Future Company"
              position="To be determined"
              date="In the future"
              description="Want to be featured on this website? Hire me now! On a more serious note, I'm open to summer Machine Learning and Software Engineering roles."
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <hr className={classes.divider}></hr>
        </Grid>
      </Grid>
      <Grid item xs={1} lg={2}></Grid>
    </Grid>
  )
}

export default Experiences;