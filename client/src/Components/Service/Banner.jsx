import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from '../variants';



const Banner = ({ Head, Meta, Page, BannerClass }) => {
    return (
        <div className={`relative ${BannerClass} xl:h-[100vh] bg-no-repeat bg-complete`}>
            <div className='bg-black/30 w-[100%] h-[100%]'>
                <motion.div
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    animate="show"
                    exit="hidden" className='h-[100%] py-32 md:py-36 flex flex-col md:flex-row justify-center gap-8 w-[90%] md:w-[85%] lg:w-[80%] items-center m-auto'>
                    <div className='text-center w-[100%]'>
                        <h2 
                            className='text-lg md:text-xl font-bold font-Lora italic mb-2 md:mb-6'
                        >
                            {Meta}
                        </h2>
                        <h1 
                            className='text-2xl md:text-3xl font-Para lg:text-5xl xl:text-7xl text-white font-extrabold md:leading-[3rem] lg:leading-[4rem] xl:leading-[4.5rem] mb-4 lg:mb-16  m-auto'
                        >
                            {Head}
                        </h1>
                        <button 
                            className='
                                px-2 md:px-4 lg:px-6 py-2 md:py-3  text-white  text-base  md:text-lg lg:text-xl font-Para font-bold bg-transparent border-2 
                                border-white hover:text-white hover:bg-[#dcb775] hover:border-[#dcb775] duration-300 ease-in-out
                            '
                        >
                            Get a Free Consultancy Today
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Banner