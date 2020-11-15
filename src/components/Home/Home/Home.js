import React, { useState } from 'react';
import Apartments from '../Apartments/Apartments';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Services from '../Services/Services';
import FakeData from '../../../FakeData/FakeData';

const Home = () => {
    const [products, setProducts] = useState(FakeData)
    return (
        <div>
            <NavBar />
            <Header />
            <section className="container">
                <div className="text-center m-5">
                    <h6>House Rent</h6>
                    <h2>Discover the latest Rent <br /> available today</h2>
                    <div className="row">
                        {
                            products.map(product => <Apartments product={product} key={product.id}></Apartments>)
                        }
                    </div>
                </div>
            </section>
            <Services />
            <Footer />
        </div>
    );
};

export default Home;