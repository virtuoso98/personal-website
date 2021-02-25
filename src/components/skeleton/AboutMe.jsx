import React from 'react';
import { Typography, Grid} from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import profile from '../../assets/images/avatar.jpg';
import ExpandButton from '../buttons/ExpandButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) =>
  createStyles({
      root: {
        paddingTop:"130px",
        backgroundColor: "#ffe6f3",
        margin: "0",
      },
      profile: {
          backgroundImage: `url(${profile})`,
          backgroundSize: 'cover',
          position: 'relative',
          height: '50vh',
          borderRadius: "50%",
      },
      text: {
        '& .MuiTypography-root': {
            fontFamily: 'Lora',
            color: "black",
            align: 'left',
          },
        '& .MuiTypography-h2': {
            paddingBottom: "30px",
        },
        '& .MuiTypography-body1': {
            paddingTop: "15px",
            lineHeight: "1.6",
            color: "#453D3B",
            fontSize: "1vw",
        }
      }

  }),
);


const AboutMe = () => {
    const classes = useStyles();

    return (
        <Grid container spacing = {5} className={classes.root}>
            <Grid item xs={2}></Grid>
            <Grid item xs={5}>
                <div className={classes.text}>
                <Typography variant="h2">
                    About me 
                </Typography>
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
                <ExpandButton 
                icon={<LinkedInIcon />}
                text="Connect"
                />
                <ExpandButton 
                icon={<LinkedInIcon />}
                text="Connect"
                />
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
