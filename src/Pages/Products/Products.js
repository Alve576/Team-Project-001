import React from 'react';
import Clothes from '../Clothes/Clothes';
import Electronics from '../Electronics/Electronics';
import Foods from '../Foods/Foods';
import Recipes from '../Recipes/Recipes'
import ShopHeader from './../ShopHeader/ShopHeader';

const Products = () => {
    return (
        <div>
            <ShopHeader></ShopHeader>
            <Recipes></Recipes>
            {/* <Foods></Foods>
            <Electronics></Electronics>
            <Clothes></Clothes> */}
        </div>
    );
};

export default Products;