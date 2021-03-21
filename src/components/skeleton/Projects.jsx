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
      paddingBottom: '60px',
    },
  }),
);

const Projects = () => {
  const classes = useStyles();
  const iconLabel = ["Material-UI", "React", "Javascript", "AWS-S3", "CSS3", "HTML5"];
  const iconLabel1 = ["Material-UI", "React", "AWS-S3"];
  const iconLabel2 = ["CSS3", "HTML5"];
  const iconList = [mui, reactjs, js, aws, css3, html5];
  const listMap = (labels, icons) => {
    const map = new Map();
    for (let i = 0; i < labels.length; i++) {
      map.set(labels[i], icons[i]);
    };
    return map;
  }

  const iconMap = listMap(iconLabel, iconList)

  return (
    <Grid container spacing={0} className={classes.root} id="projects">
      <Grid item xs={1} lg={2}></Grid>
      <Grid item xs={10} lg={8}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h2">
              Projects
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ProjectCard
              image={websitecover}
              name="Personal Website v1"
              date="Feb 2021"
              description=
              "This personal project was something that I undertook in order to explore Web Development and also hone skills in quality design interfaces."
              iconMap={iconMap}
              iconLabel={iconLabel1}
              link="https://github.com/virtuoso98/personal-website"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ProjectCard
              image={nexttonormal}
              name="Birthday Website"
              date="Jun 2020"
              description=
              "During Covid-19 Circuit Breaker, I was unable to celebrate my friend's birthday physically. Hence, I surprised him with other means! (Desktop only)"
              iconMap={iconMap}
              iconLabel={iconLabel2}
              link="https://virtuoso98.github.io/btim999.github-io/"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} lg={2}></Grid>
    </Grid>

  );
}

export default Projects;