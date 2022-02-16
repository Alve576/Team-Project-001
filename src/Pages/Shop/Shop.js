import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShopHeader from './../ShopHeader/ShopHeader';
import Foods from './../Foods/Foods';
import Electronics from './../Electronics/Electronics';
import Clothes from './../Clothes/Clothes';
import Recipes from './../Recipes/Recipes';

const Shop = () => {
    return (
        <div>
            <BrowserRouter>
                <ShopHeader></ShopHeader>
                <Routes>
                    <Route path="shop/" element={<Recipes></Recipes>} />
                    <Route exact path="/shop/recipes" element={<Recipes></Recipes>} />
                    <Route exact path="/shop/foods" element={<Foods></Foods>} />
                    <Route exact path="/shop/electronics" element={<Electronics></Electronics>} />
                    <Route exact path="/shop/clothes" element={<Clothes></Clothes>} />
                </Routes>
            </BrowserRouter>
            {/* <div className='d-flex'>
                <Products></Products>
                <Sidebar></Sidebar>
            </div> */}
        </div>
    );
};

export default Shop;