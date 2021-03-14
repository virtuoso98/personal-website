import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import LineTo from 'react-lineto';
import './Hobbies.css';



const Hobbies = () => {   
  return (
    <div className="wrapper" id="hobbies">
      <div className= "center">
        <Typography variant="h3">Hobbies</Typography>
      </div>
      <div className="japan">
        <Typography variant="h3">Japan</Typography>
      </div>
      <div className="running">
        <Typography variant="h3">Running</Typography>
      </div>
      <div className="gaming">
        <Typography variant="h3">Gaming</Typography>
      </div>
      <LineTo from="running" to="center" delay="0" zIndex={1}/>
      <LineTo from="japan" to="center" delay="0" zIndex={1}/>
      <LineTo from="gaming" to="center" delay="0" zIndex={1}/>
    </div>
  )
}

export default Hobbies;