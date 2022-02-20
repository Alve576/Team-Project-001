import React, { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe'
import ShopHeader from '../ShopHeader/ShopHeader';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://evening-cliffs-29291.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container p-0' style={{marginTop : "100px"}}>
            <h3>You Can Shop From Here.</h3>
            <div className='row px-0 justify-content-around'>
                {
                    products.map(product => <Recipe key={product._id} product={product}></Recipe>)
                }
            </div>
        </div>
    );
};

export default Products;