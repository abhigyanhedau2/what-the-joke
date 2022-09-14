import React from 'react';
import Card from '../UI/Card/Card';
import classes from './JokeItem.module.css';

const JokeItem = (props) => {
    return (
        <Card className={classes.jokeItemWrapper}>
            <p><b>{props.setup}</b></p>
            <br />
            <p>{props.delivery}</p>
        </Card>
    )
}

export default JokeItem