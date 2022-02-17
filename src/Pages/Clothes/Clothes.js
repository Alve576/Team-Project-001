import React, { useEffect, useState } from 'react';
import Clothe from '../Clothe/Clothe';
import ShopHeader from '../ShopHeader/ShopHeader';

const Clothes = () => {
    const [clothes, setClothes] = useState([])
    useEffect(() => {
        fetch('/Clothes.json')
            .then(res => res.json())
            .then(data => setClothes(data))
    }, [])
    return (
        <div className='container p-0' >
            <h3>You Can Shop From Here.</h3>
            <ShopHeader></ShopHeader>
            <h3>Clothes</h3>
            <div className='row px-0 justify-content-around'>
                {
                    clothes.map(clothe => <Clothe key={clothe.id} clothe={clothe}></Clothe>)
                }
            </div>
        </div>
    );
};

export default Clothes;