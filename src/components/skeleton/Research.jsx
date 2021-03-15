import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Typography,  Card, CardActionArea, ButtonBase, CardContent, Fab } from '@material-ui/core';
import science from '../../assets/svg-icons/science-advances.svg';
import paper from '../../assets/documents/chem_research_paper.pdf';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles((theme) =>
  createStyles({
      header: {
        marginBottom: '1vh',
      },
      root: {
        paddingTop: '55px',
        paddingBottom: '25px',
        '& .MuiPaper-root': {
          backgroundColor: 'pink',
        },
        '& .MuiTypography-root': {
          textAlign: 'justify',
        },
        '& .MuiTypography-body1': {
          marginTop: '4vh',
          lineHeight: '2.0',
        },
        '& .MuiTypography-h2': {
          paddingBottom: '5vh',
        },
        '& .MuiButtonBase-root': {
          zIndex: '0',
          position: 'relative',
        },
        '& .MuiTypography-h5': {
          fontWeight: '700',
        },
        '& img': {
          float: 'right',
          marginRight: '4vw',
          marginBottom: '2vh',
        },
        '& .MuiFab-root': {
          marginBottom: '2vh',
          marginRight: '2vw',
          zIndex: '2',
        },
      },
      item : {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      divider: {
        marginTop: '50px',
      },
    }),
  );




const Research = () => {
  const classes = useStyles();
  const redirect = (link) => {
    window.open(link);
  }

  return (
    <Grid container className={classes.root} id="research">
      <Grid item xs={2}></Grid>
      <Grid item xs={8} className={classes.header}>
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
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <CardContent>
                    <Typography variant="h5">
                      Solubility prediction using ML & first-principles methods 
                    </Typography>
                    <Typography variant="body1">
                      During the summer break of 2020, I participated in a research project with Prof Zhuang Bilin. This entailed 2 main tasks.
                      The first task was to evaluate the viability of using a first-principles equation to model the solubility of polar and non-polar 
                      solvents. The second task entailed using Machine Learning methods in order to predict solubility of various compounds. 
                      Click this card to find out more about the research! 
                    </Typography>
                  </CardContent>
                  <div className={classes.item}> 
                  <Fab color="secondary" href={paper}>
                      <GetAppIcon />
                  </Fab>
                    <img src={science} width="250" height="45"/>
                  </div>
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