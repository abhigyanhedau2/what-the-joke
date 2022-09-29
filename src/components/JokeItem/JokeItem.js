import React from 'react';
import Card from '../UI/Card/Card';
import classes from './JokeItem.module.css';

const JokeItem = (props) => {

    return (
        <Card className={classes.jokeItemWrapper}>
            <p><b>{props.setup}</b></p>
            <br />
            <p>{props.delivery}</p>
            <div className={classes.actions}>
                <i className="fa-regular fa-heart" onClick={props.onAddToFavorites}></i>
            </div>
        </Card>
    )
}

export default JokeItem