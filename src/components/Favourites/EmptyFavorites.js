import React from 'react';
import classes from './EmptyFavorites.module.css';
import emptyBoxImg from '../../assets/box.png';

const EmptyFavorites = () => {
    return (
        <div className={classes.emptyFavoritesWrapper}>
            <img src={emptyBoxImg} alt="" />
            <p>Add Some Jokes to Favorites</p>
        </div>
    )
};

export default EmptyFavorites;