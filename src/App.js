import './App.css';
import React from 'react';

/* overall import */
import Navbar from './pages/Navbar';

/* temp stuff*/
import Typography from '@material-ui/core/Typography';


/* landing page */ 
import yurucamp from './assets/images/yurucamp3.png'





function App() {
  return (
    <div>
    <Navbar />
    <img src = {yurucamp} alt = "yurucamp"/>
    <Typography>Koa Zhao Yuan</Typography>
    <Typography>Aspiring Software Enginner</Typography>
    </div>
  );
}

export default App;
