import React from 'react';
import classes from './Spinner.module.css'

const spinner = () => (
    <div className={classes.Loader} style={{marginTop:125}}>Loading...</div>
);
export default spinner;