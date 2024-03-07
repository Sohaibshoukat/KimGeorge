import React, { useEffect, useRef, useState } from 'react'
import { FaArrowDown } from 'react-icons/fa'
import logo4 from "../assets/Logo3.png"
import { MdOutlineEmail } from 'react-icons/md';
import { IoMdContact } from 'react-icons/io';
import { Link } from 'react-router-dom';


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
            <div className='h-[60vh] md:h-[50vh] xl:h-[100vh] w-[100%] bgabout'>
                <div className='flex flex-col w-[90%] md:w-[70%] m-auto text-white justify-center items-center text-center h-[100%]'>
                    <h1 className='text-2xl md:text-4xl xl:text-6xl font-bold mb-3 md:mb-6'>Strategische Denker. Digitale
                        <br />Innovatoren. Wachstumskatalysatoren.</h1>
                    <p className='text-lg md:text-xl font-light'>Hervorragende Dienstleistungen in den Bereichen kundenspezifische Software und digitales Marketing.</p>
                    <div className="flex flex-row justify-start gap-3 items-center text-xl md:text-3xl font-bold my-3 md:my-6">
                        <h3 className='font-semibold'>Mehr erforschen</h3>
                        <FaArrowDown
                            className="bggradient font-normal rounded-full p-2 md:p-3 text-4xl md:text-5xl cursor-pointer"
                            onClick={scrollToSection}
                        />
                    </div>

                </div>
            </div>

            <div ref={secondSectionRef} className='relative'>
                {/* <img src={float1} alt="" className='floatanimation hidden md:block absolute  top-[-20px] md:top-[-50px] xl:top-[-100px] left-[20%] xl:left-[30%] z-[-10] w-[100px] md:w-[300px] lg:w-[400px] xl:w-auto' />
                <img src={float2} alt="" className='floatanimation hidden md:block absolute top-[20%] left-[-5%] z-50 md:w-[200px] lg:w-[250px] w-[100px] xl:w-auto' />
                <img src={float1} alt="" className='floatanimation2 hidden md:block absolute top-[40%] right-[-2%] z-2 md:w-[250px] lg:w-[250px] w-[100px] xl:w-auto' />
                <img src={float2} alt="" className='floatanimation2 hidden md:block absolute bottom-[10%] left-[30%] md:left-[40%] xl:left-[30%] rotate-[45deg] z-10 md:w-[200px] w-[100px] lg:w-[250px] xl:w-auto' /> */}
                <div className='w-[95%] md:w-[90%] xl:w-[80%] m-auto py-24'>
                    <h2 className='text-[#0f0122] text-3xl md:text-4xl lg:text-5xl font-extrabold text-center'>Die Geschichte von Baader Solution</h2>
                    <div className='flex flex-col gap-8 lg:flex-row justify-between py-10'>
                        <div className={`text-[#0f0122] text-xl md:text-xl xl:text-2xl font-semibold lg:basis-[45%] flex flex-col gap-4 text-justify ${isVisible && 'LeftMoveAnimation'}`}>
                            <p className='font-normal'>Die Zwei Brüder (Calvin Baader & Steven Baader) und ihr langjähriger Kollege und Freund, Sergen Öztas, schlossen sich zusammen, um ihre Vision einer Agentur zu verwirklichen, die Unternehmen zum Erfolg im Internet verhilft.</p>
                            <p className='font-normal'>Was Baader Solution auszeichnet, ist nicht nur unsere technische Kompetenz und kreative Brillanz, sondern auch unsere gemeinsamen Werte und Überzeugungen. Wir glauben an die Kraft von Zusammenarbeit, Integrität und Engagement, diese Werte spiegeln sich in allem wieder, was wir tun.</p>
                        </div>
                        <div className={`lg:basis-[45%] xl:basis-[40%] w-[100%] rounded-xl ${isVisible && 'RightMoveAnimation'}`}>
                            <img src={logo4} alt="" className='w-[100%] rounded-xl' />
                        </div>
                    </div>
                    <div ref={secondSectionRef2} className='flex flex-col gap-4 text-[#0f0122] text-2xl  text-justify'>
                        <p className={`font-normal ${isVisible2 && 'LeftMoveAnimation2'}`}>Unser Ziel ist es, unsere Kunden dabei zu unterstützen, in der digitalen Welt wettbewerbsfähig zu sein und zu wachsen. Wir verstehen die Herausforderungen und Chancen, mit denen Unternehmen heute konfrontiert sind, wir entwickeln maßgeschneiderte Lösungen, die ihren individuellen Bedürfnissen und Zielen gerecht werden.</p>
                        <p className={`font-normal ${isVisible2 && 'RightMoveAnimation2'}`}>Bei Baader Solution steht die Zufriedenheit unserer Kunden an erster Stelle. Wir arbeiten eng mit Ihnen zusammen, um Ihre Vision zu verwirklichen und Ergebnisse zu liefern, die Ihre Erwartungen übertreffen. Kontaktieren Sie uns noch heute, um mehr darüber zu erfahren, wie wir Ihnen helfen können, online erfolgreich zu sein.</p>
                    </div>
                </div>
            </div>


            <div className='w-[95%] md:w-[90%] lg:w-[80%] m-auto pb-14'>
                <h2 className='text-[#0f0122] font-bold text-3xl md:text-5xl text-center mb-12 xl:mb-20'>Our Contact Info</h2>
                <div className='flex flex-col gap-8 md:flex-row justify-between'>
                    <Link to={"/contact"} className='basis-[45%] xl:basis-[40%] w-[100%]'>

                        <div className='floatanimation bg-[#0f0122] py-6 px-6 text-white rounded-xl shadow-2xl flex flex-col items-center justify-center gap-4 hover:bg-white hover:text-[#0f0122] ease-in-out duration-300'>
                            <MdOutlineEmail className='text-6xl' />
                            <h2 className='text-2xl lg:text-3xl font-bold'>Unser E-Mail</h2>
                            <p className='text-xl font-light'>kontak@baadersolution.de</p>

                        </div>
                    </Link>

                    <div className='floatanimation bg-[#0f0122] py-6 px-6 basis-[45%] xl:basis-[40%] w-[100%] text-white rounded-xl shadow-2xl flex flex-col items-center justify-center gap-4 hover:bg-white hover:text-[#0f0122] ease-in-out duration-300'>
                        <IoMdContact className='text-6xl' />
                        <h2 className='text-2xl lg:text-3xl font-bold'>Unser Standort</h2>
                        <p className='text-xl font-light'>Anton-Jordan-Straße 3 56070</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About