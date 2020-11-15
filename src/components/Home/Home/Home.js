import React from 'react';
import Apartments from '../Apartments/Apartments';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Header/>
            <Apartments/>
            <Services/>
            <Footer/>
        </div>
    );
};

export default Home;