import React from 'react'
import Banner from '../Components/Service/Banner';
import About from '../Components/About';
import ServiceSec from '../Components/Service/Service';
import Team from '../Components/Home/Team';
import Contact from '../Components/Home/Contact';


const Services = () => {


    return (
        <>
            <Banner BannerClass={"PracticeBanner"} Head={"PRACTICE AREAS"} Meta={"Want Help"} />

            <ServiceSec />

            <About />

            <Team/>
            
            <Contact/>
        </>
    )
}

export default Services