import React, { useEffect, useState, useCallback } from 'react';
import JokesList from '../JokesList/JokesList';
import Loading from '../UI/Loading/Loading';
import classes from './JokesArea.module.css';
// import sampleJokesArr from '../../utility/sampleJokes';

const JokesArea = () => {

    const [category, setCategory] = useState('Any');
    const [jokesArr, setJokesArr] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = useCallback(async () => {

        try {

            const response = await fetch(`https://v2.jokeapi.dev/joke/${category}`);

            const data = await response.json();

            return data;

        } catch (error) {
            console.log(error);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const changeCategory = (newCategory) => {
        setCategory(prevState => newCategory);
    };

    const fetchJokesArr = useCallback(
        async () => {

            setIsLoading(true);

            const tempArr = [];

            for (let i = 0; i < 9; i++) {
                const aJoke = await fetchData();

                tempArr.push(aJoke);
            }

            setJokesArr(tempArr);

            setIsLoading(false);
        },
        [fetchData]
    );

    useEffect(() => {

        fetchJokesArr();

        return () => {
            setJokesArr([]);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

    return (
        <div className={classes['jokes-area-wrapper']}>
            <div className={classes['category-buttons-wrapper']}>
                <ul className={classes['category-list-wrapper']}>
                    <li className={`${classes.listItem} ${category === 'Any' ? classes.isActive : ''}`} onClick={() => changeCategory('Any')}><button>All</button></li>
                    <li className={`${classes.listItem} ${category === 'Programming' ? classes.isActive : ''}`} onClick={() => changeCategory('Programming')}><button>Programming</button></li>
                    <li className={`${classes.listItem} ${category === 'Misc' ? classes.isActive : ''}`} onClick={() => changeCategory('Misc')}><button>Misc</button></li>
                    <li className={`${classes.listItem} ${category === 'Dark' ? classes.isActive : ''}`} onClick={() => changeCategory('Dark')}><button>Dark</button></li>
                    <li className={`${classes.listItem} ${category === 'Pun' ? classes.isActive : ''}`} onClick={() => changeCategory('Pun')}><button>Pun</button></li>
                    <li className={`${classes.listItem} ${category === 'Spooky' ? classes.isActive : ''}`} onClick={() => changeCategory('Spooky')}><button>Spooky</button></li>
                    <li className={`${classes.listItem} ${category === 'Christmas' ? classes.isActive : ''}`} onClick={() => changeCategory('Christmas')}><button>Christmas</button></li>
                </ul>
            </div>
            {isLoading && <Loading />}
            <JokesList category={category} jokesArr={jokesArr} />
        </div>
    )
};

export default JokesArea;