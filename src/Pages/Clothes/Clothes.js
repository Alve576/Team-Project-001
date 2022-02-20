import React, { useEffect, useState } from 'react';
import Clothe from './Clothe/Clothe';

const Clothes = () => {
    const [clothes, setClothes] = useState([])
    useEffect(() => {
        fetch('https://evening-cliffs-29291.herokuapp.com/cloths')
            .then(res => res.json())
            .then(data => setClothes(data))
    }, [])
    return (
        <div className='container' style={{marginTop : "100px"}} >
            <h3>You Can Shop From Here.</h3>
            <h3>Cloths</h3>
            <div className='row px-0 justify-content-around'>
                {
                    clothes.map(clothe => <Clothe key={clothe.id} clothe={clothe}></Clothe>)
                }
            </div>
        </div>
    );
};

export default Clothes;