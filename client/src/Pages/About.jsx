import React, { useEffect, useRef, useState } from 'react'
import Banner from '../Components/Service/Banner';
import AboutSection from '../Components/About/AboutSection';
import Books from '../assets/About/Books.jpg'
import Team from '../Components/Home/Team';
import CardFlex from '../Components/About/CardFlex'
import Whyus from '../Components/whyus';
import ImageSlider from '../Components/ImageSlider';


const About = () => {
    const secondSectionRef = useRef(null);
    const secondSectionRef2 = useRef(null);
    const scrollToSection = () => {
        secondSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    const handleScroll = () => {
        const top = secondSectionRef.current.getBoundingClientRect().top;
        const isVisible = top < window.innerHeight;
        setIsVisible(isVisible);
        const top2 = secondSectionRef2.current.getBoundingClientRect().top;
        const isVisible2 = top2 < window.innerHeight;
        setIsVisible2(isVisible2);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <>
            <Banner BannerClass={"PracticeBanner"} Head={"Your Trusted Legal Partner"} Meta={"About Us"} />
            <div className='w-[95%] md:w-[90%] lg:w-[90%] m-auto my-10 md:my-20 lg:my-28 xl:my-32 flex items-center justify-between flex-col md:flex-row'>
                <div className={`text-left text-black basis-[50%]`}>
                    <h5 className='text-lg lg:text-xl font-Lora font-extrabold mb-2'>Our History</h5>
                    <h4 className='text-3xl lg:text-5xl font-Para font-extrabold mb-5'>All About Us</h4>
                    <p className='text-gray-500 font-Para text-lg md:text-lg m-auto'>Each lawyer at Kim George law firm focuses exclusively on civil matters, we have choosed our lawyers taking into account their experience and ability to handle all cases.</p>
                </div>
                <div>
                    <button className='bg-transparent mt-4 md:my-6 lg:my-10 w-fit text-lg md:text-xl font-semibold py-2 px-4  md:py-4 md:px-4 text-[#002349] font-Para border-[#002349] hover:bg-[#002349] ease-in-out duration-300 hover:text-gold border-2'>
                        Find more about us
                    </button>
                </div>
            </div>
            
            {/* Aboutsection needed to be responsive. Having problem with flex */}
            <AboutSection imagePath={Books} />

            <Team />

            <div className='w-[95%] md:w-[90%] lg:w-[90%] m-auto my-10 md:my-20 lg:my-28 xl:my-32 flex items-center justify-between flex-col md:flex-row'>
                <div className={`text-left text-black basis-[50%]`}>
                    <h5 className='text-lg lg:text-xl font-Lora font-extrabold mb-2'>Our History</h5>
                    <h4 className='text-3xl lg:text-5xl font-Para font-extrabold mb-5'>All About Us</h4>
                    <p className='text-gray-500 font-Para text-lg md:text-lg m-auto'>Each lawyer at Kim George law firm focuses exclusively on civil matters, we have choosed our lawyers taking into account their experience and ability to handle all cases.</p>
                </div>
                <div>
                    <button className='bg-transparent mt-4 md:my-6 lg:my-10 w-fit text-lg md:text-xl font-semibold py-2 px-4  md:py-4 md:px-4 text-[#002349] font-Para border-[#002349] hover:bg-[#002349] ease-in-out duration-300 hover:text-gold border-2'>
                        Find more about us
                    </button>
                </div>
            </div>
            <CardFlex/>


            <Whyus />
            <ImageSlider/>
        </>
    )
}

export default About