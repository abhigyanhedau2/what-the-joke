import React, { Fragment, useEffect } from 'react';
import { useState } from 'react';
import JokeItem from '../JokeItem/JokeItem';
import classes from './JokesList.module.css';

const JokesList = (props) => {

    const [favJokesArr, setFavJokesArr] = useState([]);

    const fetchJokes = async () => {

        try {

            const response = await fetch('https://what-the-joke-6ab58-default-rtdb.firebaseio.com/favJokes.json');

            if (!response.ok)
                throw new Error('Failed to Fetch Jokes');

            const data = await response.json();

            if (data)
                setFavJokesArr(data);

        } catch (error) {
            console.log(error);
        }

    };

    useEffect(() => {
        fetchJokes();
    }, [])


    const addToFavoritesHandler = async (id) => {

        const exists = favJokesArr.findIndex(item => item === id);

        if (exists === -1) {
            setFavJokesArr(prevFavJokesArr => [...prevFavJokesArr, id]);

            try {
                await fetch('https://what-the-joke-6ab58-default-rtdb.firebaseio.com/favJokes.json', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(favJokesArr)
                })
            } catch (error) {
                console.log(error);
            }
        }

    };

    const jokes = props.jokesArr.map(item => {
        if (item.type === 'single')
            return <JokeItem key={item.id} id={item.id} setup={item.joke} delivery="" onAddToFavorites={addToFavoritesHandler.bind(null, item.id)} />
        else
            return <JokeItem key={item.id} id={item.id} setup={item.setup} delivery={item.delivery} onAddToFavorites={addToFavoritesHandler.bind(null, item.id)} />
    })

    return (
        <Fragment>
            <div className={classes.jokeListWrapper}>{jokes}</div>
            {!props.isLoading && <button className={classes.showMoreButton} onClick={props.onFetchMoreJokes}>Show More <i className="fa-solid fa-angle-down"></i> </button>}
        </Fragment>
    )
};

export default JokesList;