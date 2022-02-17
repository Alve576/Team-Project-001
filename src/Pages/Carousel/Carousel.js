import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import './Carousel.css'

const Carousel = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {

        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])
    return (
        <div className='body'>
            <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
                <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
                    <motion.div className='item'>
                        <img className='w-50' src="http://wp.alithemes.com/html/nest/demo-rtl/assets/imgs/page/about-3.png" alt="" />
                    </motion.div>
                    <motion.div className='item'>
                        <img className='w-50' src="http://wp.alithemes.com/html/nest/demo-rtl/assets/imgs/page/about-4.png" alt="" />
                    </motion.div>
                    <motion.div className='item'>
                        <img className='w-50' src="http://wp.alithemes.com/html/nest/demo-rtl/assets/imgs/page/about-2.png" alt="" />
                    </motion.div>
                    <motion.div className='item'>
                        <img className='w-50' src="https://i.ibb.co/hVbk0dL/dinner3.png" alt="" />
                    </motion.div>
                    <motion.div className='item'>
                        <img className='w-50' src="https://i.ibb.co/bL5fdDZ/dinner2.png" alt="" />
                    </motion.div>
                    <motion.div className='item'>
                        <img className='w-50' src="https://i.ibb.co/W3rcnwq/dinner1.png" alt="" />
                    </motion.div>
                    <motion.div className='item'>
                        <img className='w-50' src="https://i.ibb.co/PMDsm0w/dinner4.png" alt="" />
                    </motion.div>
                    <motion.div className='item'>
                        <img className='w-50' src="https://i.ibb.co/fphNtGX/dinner5.png" alt="" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}



export default Carousel
