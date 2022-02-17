import React from 'react';
import Recipes from './../Recipes/Recipes';
import Navbar from './../../Components/Navbar.js'
import Footer from './../../Components/Footer/Footer';

const Shop = () => {
    return (
        <div>
            <Navbar/>
            <Recipes></Recipes>
            <Footer/>
        </div>
    );
};

export default Shop;