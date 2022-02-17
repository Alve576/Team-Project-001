import React, { useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion';
import './style.css'
import MuiCard from './MuiCard'
const Carousel = () => {
    const [foods, setFoods] = useState([])
    const [width,setWidth] = useState(0);
    const carousel = useRef();
        useEffect(() => {
            fetch('/Food.json')
                .then(res => res.json())
                .then(data => setFoods(data))
        }, [])
    useEffect(()=>{

        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    },[])
  return (
    <div className='mt-5'>
        <h1 style={{color : "#253D4E",fontWeight : 'bolder', textAlign : 'left'}}>Featured Categories</h1>
        <motion.div ref={carousel} className='carousel' whileTap={{cursor : "grabbing"}}>
            <motion.div drag='x' dragConstraints={{right : 0,left : -width}} className='inner-carousel'>
                        {
                            foods.map(food => <MuiCard key={food.id} food={food}></MuiCard>)
                        }
            </motion.div>
        </motion.div>
    </div>
  )
}



export default Carousel