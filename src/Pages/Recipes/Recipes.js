import React, { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe'
import ShopHeader from '../ShopHeader/ShopHeader';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('/Products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container p-0' >
            <h3>You Can Shop From Here.</h3>
            <ShopHeader></ShopHeader>
            <h3>Clothes</h3>
            <div className='row px-0 justify-content-around'>
                {
                    products.map(product => <Recipe key={product.id} product={product}></Recipe>)
                }
            </div>
        </div>
    );
};

export default Products;