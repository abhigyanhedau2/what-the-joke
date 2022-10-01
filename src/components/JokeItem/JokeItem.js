import React from 'react';
import Card from '../UI/Card/Card';
import classes from './JokeItem.module.css';
import { favJokesActions } from '../../store/favJokes-slice';
import { useDispatch, useSelector } from 'react-redux';

const JokeItem = (props) => {

    const favJokesArr = useSelector(state => state.favJokes.favJokesArr);
    const dispatch = useDispatch();

    const likeClickHandler = async () => {

        if (!favJokesArr.includes(props.id))
            dispatch(favJokesActions.addJokeToFavorites({ id: props.id }));

        else
            dispatch(favJokesActions.removeJokeFromFavorites({ id: props.id }));

    };

    return (
        <Card className={classes.jokeItemWrapper}>
            <p><b>{props.setup}</b></p>
            <br />
            <p>{props.delivery}</p>
            <div className={classes.actions}>
                <i className={`fa-${favJokesArr.includes(props.id) ? 'solid' : 'regular'} fa-heart`} onClick={likeClickHandler}></i>
            </div>
        </Card>
    )
}

export default JokeItem