import React, { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('/Products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container p-0' >
            <div className='row px-0 justify-content-around'>
                {
                    products.map(product => <Recipe key={product.id} product={product}></Recipe>)
                }
            </div>
        </div>
    );
};

export default Products;