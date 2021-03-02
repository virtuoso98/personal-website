import './App.css';
import React from 'react';
import Navbar from './components/skeleton/Navbar';
import Landing from './components/skeleton/Landing';
import AboutMe from './components/skeleton/AboutMe';
import Experiences from './components/skeleton/Experiences';
import Projects from './components/skeleton/Projects';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: '#ffe6f3',
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
    <Experiences />
    <Projects />
    </div>
  );
}

export default App;
