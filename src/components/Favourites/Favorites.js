import React, { useEffect } from 'react';
import HRLine from '../UI/HRLine/HRLine';
import classes from './Favorites.module.css';
import JokeItem from '../JokeItem/JokeItem';
import jokeListClasses from '../JokesList/JokesList.module.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useCallback } from 'react';
import EmptyFavorites from './EmptyFavorites';
const Favorites = () => {

    const [favJokesArr, setFavJokesArr] = useState([]);

    const getJokeFromId = async (id) => {
        const response = await fetch(`https://v2.jokeapi.dev/joke/Any?idRange=${id}`);

        if (response.error)
            throw new Error('Getting joke with id : ', id, 'failed');

        const data = await response.json();

        return {
            id: id,
            type: data.type,
            setup: data.setup ? data.setup : '',
            delivery: data.delivery ? data.delivery : '',
            joke: data.joke ? data.joke : ''
        }
    };

    const favJokesIds = useSelector(state => state.favJokes.favJokesArr);

    const mapJokesFromIds = useCallback(async (favJokesIds) => {
        const newArr = await Promise.all(favJokesIds.map(async item => {
            const joke = await getJokeFromId(item);

            return {
                id: joke.id,
                type: joke.type,
                setup: joke.setup ? joke.setup : '',
                delivery: joke.delivery ? joke.delivery : '',
                joke: joke.joke ? joke.joke : ''
            }
        }));

        setFavJokesArr(newArr);
    }, []);

    useEffect(() => {
        const mapJokes = async () => {
            await mapJokesFromIds(favJokesIds);
        };

        mapJokes();
    }, [favJokesIds, mapJokesFromIds]);

    const jokes = favJokesArr.map(item => {
        if (item.type === 'single')
            return <JokeItem key={item.id} id={item.id} setup={item.joke} delivery="" />
        else
            return <JokeItem key={item.id} id={item.id} setup={item.setup} delivery={item.delivery} />
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={classes.favoritesWrapper}>
            <h1>Favorites</h1>
            <HRLine color="#28344c" />
            <div className={`${jokeListClasses.jokeListWrapper} ${classes.favoriteJokesListWrapper}`}>
                {favJokesIds.length === 0 && <EmptyFavorites />}
                {favJokesIds.length !== 0 && jokes}
            </div>
        </div>
    )
};

export default Favorites;