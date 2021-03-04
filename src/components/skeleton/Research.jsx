import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Typography,  Card, CardActionArea, ButtonBase, CardContent, CardMedia } from '@material-ui/core';
import chemistry from '../../assets/images/chemistry.jpg';

const useStyles = makeStyles((theme) =>
  createStyles({
      root: {
        paddingTop: '25px',
        paddingBottom: '25px',
        '& .MuiPaper-root': {
          backgroundColor: 'pink',
        },
        '& .MuiTypography-root': {
          textAlign: 'left',
        },
        '& .MuiTypography-body1': {
          lineHeight: '1.6',
        },
        '& .MuiTypography-h2': {
          marginBottom: '10px',
        },
      },
      divider: {
        marginTop: '50px',
      }
    }),
  );




const Research = () => {
  const classes = useStyles();
  const redirect = (link) => {
    window.open(link);
  }

  return (
    <Grid container className={classes.root}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Typography variant="h2">
          Research
        </Typography>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Card>
          <ButtonBase onClick={() => redirect("https://advances.sciencemag.org/content/7/7/eabe7275/tab-article-info")}>
            <CardActionArea>
              <Grid container spacing={3}>
                {/* <Grid item xs={4}>
                  <Typography> 
                    <CardMedia 
                    component="img"
                    src={chemistry}
                    height="200"
                    />
                  </Typography>
                </Grid> */}
                <Grid item xs={12}>
                  <CardContent>
                  <Typography variant="h5">
                    Machine Based Learning solubility 
                  </Typography>
                  <Typography variant="body1">
                    During the summer break of 2020, I participated in a research project with Prof Zhuang Bilin. This entailed 2 main tasks:
                    Finding out the viability of using a first-principles mode to classify both and also the viability of using machine learning
                    to predict the solubility of multiple solvents.Click this to find out more!
                  </Typography>
                  <Typography>
                    Published in Science Advances
                  </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </CardActionArea>
          </ButtonBase>
        </Card>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <hr className={classes.divider}></hr>
      </Grid>
    </Grid>
  )
}

export default Research;