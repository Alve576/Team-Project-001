import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const Foods = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('/Food.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    console.log(foods)
    return (
        <div className='container p-0' >
            <h3>Foods</h3>
            <div className='row px-0 justify-content-around'>
                {
                    foods.map(food => <Food key={food.id} food={food}></Food>)
                }
            </div>
        </div>
    );
};

export default Foods;