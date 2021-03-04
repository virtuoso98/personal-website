import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';

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
        paddingTop: "5px",
      },
    },
  }),
);

const ExperienceCard = ({image, name, position, date, description}) => {
  const classes = useStyles();

  return (
    <Card elevation={5} className={classes.root}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="210"
          image={image}
        />
        <CardContent>
          <Typography variant="h5">
            {name}
          </Typography>
          <Typography variant="h5">
            {position}
          </Typography>
          <Typography variant="h6">
            {date}
          </Typography>
          <Typography variant="body1">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ExperienceCard;