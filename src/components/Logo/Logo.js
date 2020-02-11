import React from 'react';
import burgerLog from '../../assets/images/27.1 burger-logo.png.png' 
import classes from './Logo.module.css'
const logo = (props) => (
    <div className={classes.Logo} >
        <img src={burgerLog} alt="MyBurger"/>
    </div>
);


export default logo;