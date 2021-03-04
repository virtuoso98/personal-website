import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, SvgIcon, CardContent, CardMedia, Typography, ButtonBase, Tooltip } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      alignItem: 'left',
      '& .MuiTypography-root': {
        textAlign: 'left',
        textAlign: 'justify',
      },
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
    },
    wrapper: {
      width: '100%',
      display: 'flex',
      justifyContent: styleProps => styleProps.iconAlignment === 'left' ? 'flex-start' : 'space-evenly',
      '& img': {
        marginRight: styleProps => styleProps.iconAlignment  === 'left' ? 20 : 0
      }
    },
  }),
);


const ProjectCard = ({ image, name, date, description, iconMap, iconLabel, link, iconAlignment='center' }) => {
  const styleProps = {
    iconAlignment: iconAlignment
  }
  
  const classes = useStyles(styleProps);

  const listItems = iconLabel.map((label) => {
    console.log(label);
    console.log(iconMap.get(label));
    return(
    <Tooltip placement="bottom" title={label} aria-label={label} arrow>
      <img width="50" src={iconMap.get(label)}/>
    </Tooltip>)
  });

  const redirect = (url) => {
      window.open(url);
    }
  
  return (
    <Card elevation={5} className={classes.root}>
      <ButtonBase onClick={()=>redirect(link)}>
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
            <div className={classes.wrapper}>
            {listItems}
            </div>
          </CardContent>
        </CardActionArea>
      </ButtonBase>
    </Card>
  );
}

export default ProjectCard;