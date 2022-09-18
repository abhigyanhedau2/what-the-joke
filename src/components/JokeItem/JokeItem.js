import React from 'react';
import Card from '../UI/Card/Card';
import classes from './JokeItem.module.css';

const JokeItem = (props) => {

    const addToFavorites = async () => {

        try {
            fetch('https://what-the-joke-6ab58-default-rtdb.firebaseio.com/favJokes.json', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    jokeId: props.id
                })
            });
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <Card className={classes.jokeItemWrapper}>
            <p><b>{props.setup}</b></p>
            <br />
            <p>{props.delivery}</p>
            <div className={classes.actions}>
                <i className="fa-regular fa-heart" onClick={addToFavorites}></i>
            </div>
        </Card>
    )
}

export default JokeItem