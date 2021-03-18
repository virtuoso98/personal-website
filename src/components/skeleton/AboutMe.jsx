import React from 'react';
import { Typography, Grid, Hidden } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import profile from '../../assets/images/avatar.png';
import ExpandButton from '../buttons/ExpandButton';
import linkedin from '../../assets/svg-icons/linkedin.svg';
import facebook from '../../assets/svg-icons/facebook.svg';
import instagram from '../../assets/svg-icons/instagram.svg';
import medium from '../../assets/svg-icons/medium.svg';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      textAlign: 'justify',
      padding: '13vh 0',
      backgroundColor: '#ffe6f3',
      margin: '0',
      '& .MuiTypography-h3': {
        marginBottom: '5vh',
      },
    },
    profile: {
      maxWidth: '100%',
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
        marginRight: '15px',
        lineHeight: '1.6',
        color: '#453D3B',
        fontSize: '1vw',
      },
    },
    divider: {
      marginTop: '50px',
      marginBottom: '-45px',
    },
    '@media only screen and (max-width:600px)': {
      text: {
        '& .MuiTypography-body1': {
          fontSize: '0.8em',
          lineHeight: '1.5',
        },
      },
      profile: {
        '@media only screen and (max-width:600px)': {
          paddingTop: '5vh',
          maxWidth: '100%',
          display: 'block',
          height: 'auto',
        }
      },
    },
  }),
);


const AboutMe = () => {
  const classes = useStyles();

  return (
    <div>
      <Hidden xsDown>
        <Grid container className={classes.root} id="about">
          <Grid item xs={1} md={2}></Grid>
          <Grid item xs={10} md={8}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h2">
                  About Me
          </Typography>
              </Grid>
              <Grid item xs={8}>
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
                      color="#00a0dc"
                      link="https://www.linkedin.com/in/zhaooo/"
                    />
                    <ExpandButton
                      icon={instagram}
                      text="Follow"
                      color="#ffccff"
                      link="https://www.instagram.com/zhaoooo__/"
                    />
                    <ExpandButton
                      icon={medium}
                      text="Read"
                      color="white"
                      link="https://medium.com/"
                    />
                    <ExpandButton
                      icon={facebook}
                      text="Add Me!"
                      color="#2AA4F4"
                      link="https://www.facebook.com/zhaooooooooo/"
                    />
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.next}>
                  <img src={profile} className={classes.profile} />
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <hr className={classes.divider}></hr>
            </Grid>
          </Grid>

          <Grid item xs={1} md={2}></Grid>
        </Grid>

      </Hidden>
      <Hidden smUp>
        <Grid container spacing={0} className={classes.root} id="about">
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Typography variant="h3">
                  About me
            </Typography>
              </Grid>
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
              </div>
              <Grid item xs={1}></Grid>
              <Grid item xs={10}>
                <img src={profile} className={classes.profile} />
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
            <Grid item xs={12}>
              <hr className={classes.divider}></hr>
            </Grid>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Hidden>
    </div>
  )
}
export default AboutMe;
