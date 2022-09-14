import React from 'react';
import Title from '../Title/Title';
import HRLine from '../UI/HRLine/HRLine';
import JokesArea from '../JokesArea/JokesArea';

const Home = () => {
    return (
        <div>
            <Title />
            <HRLine color="#28344c" />
            <JokesArea />
        </div>
    )
};

export default Home;