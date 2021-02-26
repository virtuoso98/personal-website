import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import profile from '../../assets/images/avatar.jpg';
import ExpandButton from '../buttons/ExpandButton';
import linkedin from '../../assets/svg-icons/linkedin.svg';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      textAlign: 'justify',
      padding: '13vh 0',
      backgroundColor: '#ffe6f3',
      margin: '0',
    },
    profile: {
      backgroundImage: `url(${profile})`,
      backgroundSize: 'cover',
      position: 'relative',
      height: '50vh',
      borderRadius: '50%',
    },
    buttonGroup: {
      display: 'flex',
    },
    text: {
      '& .MuiTypography-root': {
        color: 'black',
        align: 'left',
      },
      '& .MuiTypography-h2': {
        paddingBottom: '15px',
      },
      '& .MuiTypography-body1': {
        paddingBottom: '15px',
        marginRight: '5px',
        lineHeight: '1.6',
        color: '#453D3B',
        fontSize: '1vw',
      },
    },
  }),
);


const AboutMe = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={6} className={classes.root} id="about">
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Typography variant="h2">
          About Me
        </Typography>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={5}>
        <div className={classes.text}>
          <Typography variant="body1">
            Hi! おはよう。你好！I'm Zhao, currently studying in Yale-NUS College.
                </Typography>
          <Typography variant="body1">
            I enjoy creating things that bring people happiness and convenience. Be it creating a birthday website for my friend during the Covid-19
            pandemic or any application in particular, my goal is to always build things that enhance people's experience with technology.
                </Typography>
          <Typography variant="body1">
            Currently, my experience and competencies lie in web development, scientific research and optical character recognition.
            In the short term, I'd like to explore opportunities related to software engineering.
                </Typography>
          <div className={classes.buttonGroup}>
            <ExpandButton
              icon={linkedin}
              text="Connect"
              color="#00EBEB"
            />
            <ExpandButton
              icon={linkedin}
              text="Connect"
              color="red"
            />
          </div>
        </div>
      </Grid>
      <Grid item xs={3}>
        <div className={classes.next}>
          <div className={classes.profile}></div>
        </div>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  )
}
export default AboutMe;
