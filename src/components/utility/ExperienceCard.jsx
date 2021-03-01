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

const ExperienceCard = ({image, date, description, icons}) => {
  return (
    <Card elevation={5}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="160"
          image={image}
        />
        <CardContent>
          
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ExperienceCard;