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
        paddingTop: '5px',
        paddingBottom: '8px',
      },
      '& svg': {
        height: 'auto',
        marginRight: "3px",
      }
    },
  }),
);


const ProjectCard = ({ image, name, date, description, iconMap, iconLabel }) => {
  const classes = useStyles();
  const listItems = iconLabel.map((label) => {
    console.log(label);
    console.log(iconMap.get(label));
    return(
    <Tooltip title={label} aria-label={label} placement="bottom" arrow>
      <img width="50" src={iconMap.get(label)} />
    </Tooltip>)
  });

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
          {listItems}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProjectCard;