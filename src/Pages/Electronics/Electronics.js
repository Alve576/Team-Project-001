import React, { useEffect, useState } from 'react';
import Electronic from '../Electronic/Electronic';
import ShopHeader from '../ShopHeader/ShopHeader';

const Electronics = () => {
    const [electronics, setElectronics] = useState([])
    useEffect(() => {
        fetch('https://evening-cliffs-29291.herokuapp.com/electronics')
            .then(res => res.json())
            .then(data => setElectronics(data))
    }, [])
    return (
        <div className='container p-0' style={{marginTop : "100px"}}>
            <h3>You Can Shop From Here.</h3>
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