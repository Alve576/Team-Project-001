import React, { useEffect, useState } from 'react';
import Electronic from '../Electronic/Electronic';

const Electronics = () => {
    const [electronics, setElectronics] = useState([])
    useEffect(() => {
        fetch('/Electronics.json')
            .then(res => res.json())
            .then(data => setElectronics(data))
    }, [])
    return (
        <div className='container p-0' >
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