import React from 'react';

import popcorn from '../../public/images/popcorn.jpeg';

import HomePageArticle from './HomePageArticle';
import CurrentShowings from "./CurrentShowings";

const Home = () => {
    return (
        <>
            <div className="container"><img src={popcorn} alt="Popcorn"/></div>
            <div className="container">
                <h1>Team 1 Cinemas</h1>
            </div>
            <HomePageArticle title="Welcome to Team 1 Cinemas"/>
            <CurrentShowings/>
            <HomePageArticle title="Check out our latest showings!"/>
        </>
    );
}

export default Home;