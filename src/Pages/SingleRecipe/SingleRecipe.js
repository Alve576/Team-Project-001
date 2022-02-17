import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleRecipe = () => {
    const [recipe, setRecipe] = useState({})
    useEffect(() => {
        fetch(`/Products.json/${recipeId}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    const { recipeId } = useParams()
    return (
        <div>
            <h3>This is Recipe:{recipeId}</h3>
        </div>
    );
};

export default SingleRecipe;