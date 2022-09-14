import React from 'react';
import HRLine from '../UI/HRLine/HRLine';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <div className={classes.footer}>
            <p>What The Joke!</p>
            <HRLine color="#fff" />
            <p>Created by Abhigyan Hedau</p>
        </div>
    )
};

export default Footer;