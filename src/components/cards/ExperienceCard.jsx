import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
  }),
);

const ExperienceCard = ({image, name, position, date, description, icons}) => {
  return (
    <Card elevation={5}>
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
          <Typography variant="h6">
            {position}
          </Typography>
          <Typography variant="h6">
            {date}
          </Typography>
          <Typography component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ExperienceCard;