import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, SvgIcon, Tooltip } from '@material-ui/core';


import mui from '../../assets/svg-icons/material-ui.svg';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      textAlign: 'justify',
      '& .MuiTypography-h5': {
        color: 'black',
      },
      '& .MuiTypography-h6': {
        color: '#4d4d4d',
        fontSize: '19px',
      },
      '& .MuiTypography-body1': {
        color: '#808080',
      },
    },
  }),
);


const ProjectCard = ({image, name, date, description}) => {
  const classes = useStyles();

  return (
    <Card elevation={5} className={classes.root}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="280"
          image={image}
        />
        <CardContent>
          <Typography variant="h5">
            {name}
          </Typography>
          <Typography variant="h6">
            {date}
          </Typography>
          <Typography variant="body1">
            {description}
          </Typography>
        </CardContent>
        <Tooltip title="Material-UI" aria-label="Material-UI">
            <SvgIcon component={mui} viewBox= "0 0 100 100" />
        </Tooltip>
      </CardActionArea>
    </Card>
  );
}

export default ProjectCard;