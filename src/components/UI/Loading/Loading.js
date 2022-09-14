import React from 'react';
import ReactLoading from "react-loading";
import classes from './Loading.module.css';

const Loading = () => {
    return (
        <div className={classes.loadingWrapper}>
            <ReactLoading className={classes.loader} type='bars' color="#000" />
            <p>What is a good Internet Explorer Joke?? <b>Loading...</b></p>
        </div>
    )
}

export default Loading