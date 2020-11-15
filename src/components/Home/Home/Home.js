import React from 'react';
import Apartments from '../Apartments/Apartments';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Header/>
            <Apartments/>
        </div>
    );
};

export default Home;