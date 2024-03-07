import React, { useEffect, useRef, useState } from 'react'
import whyimage from "../assets/AnimatedGif.gif"
import CountUp from 'react-countup';
import { FaFirefox, FaUserGroup } from 'react-icons/fa6';
import { FaBriefcase } from 'react-icons/fa';
import { IoIosMedal } from 'react-icons/io';

const whyus = () => {




    const custom = [
        {
            count: "7",
            title: "Qualified Lawyers",
            Icon: FaUserGroup
        },
        {
            count: "2154",
            title: "lawyered Clients",
            Icon: FaBriefcase
        },
        {
            count: "4587",
            title: "Successful Cases",
            Icon: FaFirefox
        },
        {
            count: "56",
            title: "Honors & Awards",
            Icon: IoIosMedal
        }
    ]

    return (

        <div className='relative my-10 md:my-20 lg:my-28 xl:my-32'>
            <div className='w-[95%] md:w-[90%] lg:w-[90%] m-auto flex items-center justify-between flex-col md:flex-row'>
                <div className={` text-black text-center mb-20`}>
                    <h2 className='text-3xl lg:text-5xl font-Para font-extrabold mb-5'>Our Numbers</h2>
                    <p className='text-gray-500 lg:max-w-[80%] xl:max-w-[60%] font-Para text-lg md:text-lg m-auto'>Since 1900, lawyer start working aiming to build awide range circle of customers, and to win all the cases brought by the customers, have alook in our numbers.</p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0 w-[90%] m-auto'>
                {custom.map((item, index) => (
                    <div className='relative group ease-in-out duration-300 overflow-hidden'>
                        <div className="flex items-center justify-between gap-4 py-10 px-8 border-[1px] border-gray-200">
                            <div>
                                <h2 className='text-3xl md:text-4xl font-Para font-bold text-black'>{item.count}+</h2>
                                <h3 className='text-xl font-Para font-light text-black'>{item.title}</h3>
                            </div>
                            <item.Icon className='text-[#dcb775] text-6xl md:text-6xl font-semibold' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default whyus