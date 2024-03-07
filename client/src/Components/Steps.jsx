import React, { useEffect, useRef, useState } from 'react'
import rocket from "../assets/rocket image.png";
import styled, { keyframes } from "styled-components";
import image1 from "../assets/Steps/1.gif"
import image2 from "../assets/Steps/2.gif"
import image3 from "../assets/Steps/3.gif"
import image4 from "../assets/Steps/4.gif"



const Steps = () => {

    const [isVisible, setIsVisible] = useState(false);
    const whyUsRef = useRef(null);

    const handleScroll = () => {
        const top = whyUsRef.current.getBoundingClientRect().top;
        const isVisible = top < window.innerHeight;
        if(isVisible){
            setIsVisible(isVisible);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    const StepData = [
        {
            Title: "Story & History",
            des: "lawyer started as a sole practitioner providing services to the area community. Our Office has now grown to five lawyers and provides expert legal representation.",
            Image: image1
        },
        {
            Title: "Values & Philosophy",
            des: "lawyer Law Offices founded on the principles of truth, justice, accountability, and equal access. Our success has been the result of each attorney and staff members.",
            Image: image2
        },
        {
            Title: "Mission & Services",
            des: "lawyer founded the firm with a desire to tackle the most challenging legal issues in the northwest and to advocate entirely on behalf of plaintiffs.",
            Image: image3
        }
    ]


    return (
        <>
            <div ref={whyUsRef}  className='bg-[#002349]  w-[100%] py-8 md:py-12 lg:py-20 mb-8'>
                <h2 className='text-white text-2xl font-Para lg:text-5xl text-center font-bold'>WELCOME TO KIM GEORGE & ASSOCIATES</h2>
                <div 
                    className={`grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-x-32 gap-y-10 m-auto my-10 md:my-20 w-[80%]`}
                >
                    {StepData.map((item, index) => (
                        <div
                            className={`border-1 opacity-0 rounded-2xl shadow-xl text-white flex flex-col justify-start items-center ${isVisible && 'floatdownanimation2' }`}
                            key={index}
                            style={{ animationDelay: `${(index) * 600}ms` }}
                        >
                            <div className='flex flex-row justify-between items-center w-[100%]'>
                                <h1 className='text-5xl font-Lora font-bold text-[#dcb775]'>0{index+1}.</h1>
                                <h3 className='text-3xl md:text-4xl font-Head font-bold basis-[50%] text-right'>{item.Title}</h3>
                            </div>
                            <div className='text-center my-4'>
                                <p className='text-base lg:text-lg font-Para font-lights text-justify'>{item.des}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Steps