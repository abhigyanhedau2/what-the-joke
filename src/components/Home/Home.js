import React from 'react';
import Title from '../Title/Title';
import HRLine from '../UI/HRLine/HRLine';
import JokesArea from '../JokesArea/JokesArea';
import { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Title />
            <HRLine color="#28344c" />
            <JokesArea />
        </div>
    )
};

export default Home;