import React, { Fragment } from 'react';
import JokeItem from '../JokeItem/JokeItem';
import classes from './JokesList.module.css';

const JokesList = (props) => {

    const jokes = props.jokesArr.map(item => {
        if (item.type === 'single')
            return <JokeItem key={item.id} id={item.id} setup={item.joke} delivery="" />
        else
            return <JokeItem key={item.id} id={item.id} setup={item.setup} delivery={item.delivery} />
    })

    return (
        <Fragment>
            <div className={classes.jokeListWrapper}>{jokes}</div>
            {!props.isLoading && <button className={classes.showMoreButton} onClick={props.onFetchMoreJokes}>Show More <i className="fa-solid fa-angle-down"></i> </button>}
        </Fragment>
    )
};

export default JokesList;