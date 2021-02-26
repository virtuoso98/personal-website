import './App.css';
import React from 'react';
import Navbar from './components/skeleton/Navbar';
import Landing from './components/skeleton/Landing';
import AboutMe from './components/skeleton/AboutMe';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& .MuiTypography-root': {
        fontFamily: 'Lora',
      },
    }
  }),
);

function App() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
    <Navbar />
    <Landing />
    <AboutMe />
    </div>
  );
}

export default App;
