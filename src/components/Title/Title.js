import React from 'react';
import classes from './Title.module.css';
import blobSvg from '../../assets/blob.svg';
import laughImg from '../../assets/laugh.png';

const Title = () => {
    return (
        <div className={classes["title-card-wrapper"]}>
            <div className={classes["title-desc-wrapper"]}>
                <h1>What The Joke!</h1>
                <p>Want to have a good laugh? Or just want to crack jokes among some friends? Or need jokes as per your cutomizations. We've got you covered.</p>
                <p>Welcome to <b>What The Joke!</b> Your one stop solution for all the best jokes on the internet.</p>
            </div>
            <div className={classes["blob-and-image-wrapper"]}>
                <img className={classes["laugh-img"]} src={laughImg} alt="laughing-cartoon" />
                <img className={classes.blob} src={blobSvg} alt="blob-svg" />
            </div>
        </div>
    )
};

export default Title;