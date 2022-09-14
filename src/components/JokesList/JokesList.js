import React from 'react';
import JokeItem from '../JokeItem/JokeItem';
import classes from './JokesList.module.css';

const JokesList = (props) => {

    const jokes = props.jokesArr.map(item => {
        if (item.type === 'single')
            return <JokeItem key={item.id} setup={item.joke} delivery="" />
        else
            return <JokeItem key={item.id} setup={item.setup} delivery={item.delivery} />
    })

    return (
        <div className={classes.jokeListWrapper}>{jokes}</div>
    )
};

export default JokesList;