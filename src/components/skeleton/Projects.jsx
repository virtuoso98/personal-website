import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Typography, Tooltip, SvgIcon } from '@material-ui/core';
import ProjectCard from '../cards/ProjectCard';
import html5 from '../../assets/svg-icons/html5.svg';
import css3 from '../../assets/svg-icons/css3.svg';
import aws from '../../assets/svg-icons/aws-s3.svg';
import js from '../../assets/svg-icons/javascript.svg';
import reactjs from '../../assets/svg-icons/reactjs.svg';
import mui from '../../assets/svg-icons/material-ui.svg';
import nexttonormal from '../../assets/images/nexttonormal.png';
import websitecover from '../../assets/images/websitecover.png';



const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: '50px',
    },
  }),
);

const Projects = () => {
  const classes = useStyles();
  const iconLabel = ["Material-UI", "React", "Javascript", "AWS-S3", "CSS3", "HTML5"];
  const iconList = [mui, reactjs, js, aws, css3, html5];
  const listMap = (labels, icons) => {
    const map = new Map();
    for(let i = 0; i < labels.length; i++){
      map.set(labels[i], icons[i]);
    };
    return map;
  }
  
  const iconMap = listMap(iconLabel, iconList)

  return (
    <Grid container spacing={3} className={classes.root} id="projects">
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Typography variant="h2">
          Projects
        </Typography>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={4}>
        <ProjectCard 
        image={websitecover}
        name="Personal Website v1"
        date="Feb 2021"
        description=
        "This personal project was something that I undertook in order to explore Web Development and also hone my skills in effective design interfaces."
        iconMap={iconMap}
        iconLabel={iconLabel}
        />
      </Grid>
      <Grid item xs={4}>
        <ProjectCard 
        image={nexttonormal}
        name="Birthday Website"
        date="Jun 2020"
        description=
        "During Singapore's Covid-19 Circuit Breaker, I was unable to celebrate my friend's birthday physically. Therefore, I surprised him in other ways!"
        iconMap={iconMap}
        iconLabel={iconLabel}
        />
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
}

export default Projects;