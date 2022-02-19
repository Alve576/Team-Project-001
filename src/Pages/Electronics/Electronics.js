import React, { useEffect, useState } from 'react';
import Electronic from '../Electronic/Electronic';
import ShopHeader from '../ShopHeader/ShopHeader';

const Electronics = () => {
    const [electronics, setElectronics] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/electronics')
            .then(res => res.json())
            .then(data => setElectronics(data))
    }, [])
    return (
        <div className='container p-0' >
            <h3>You Can Shop From Here.</h3>
            <ShopHeader></ShopHeader>
            <h3>Electronic</h3>
            <div className='row px-0 justify-content-around'>
                {
                    electronics.map(electronic => <Electronic key={electronic.id} electronic={electronic}></Electronic>)
                }
            </div>
        </div>
    );
};

export default Electronics;