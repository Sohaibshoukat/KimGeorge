import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {

    const Menu = [
        {
            Title: "Home Page",
            Link: "/",
        },
        {
            Title: "About Us",
            Link: "#",
        },
        {
            Title: "Services",
            Link: "#1",
        },
        {
            Title: "Contact us",
            Link: "#2",
        },
        {
            Title: "Our Lawyers",
            Link: "#3"
        }
    ];


    const ServiceName = [
        {
            Title: "Wills & Probate"
        },
        {
            Title: "Real Estate"
        },
        {
            Title: "Companies and Businesses"
        },
        {
            Title: "Dispute Resolution"
        }

    ]

    const ContactData = [
        {
            text: "Call Us Now !",
            Head: "+ 473 435 4990",
            message: "24/7 Available"
        },
        {
            text: "Send Us Message !",
            Head: "kgeorge@kimgeorgelaw.com",
            message: "24/7 Available"
        },
        {
            text: "Visit Our Office !",
            Head: "St. Georges Grenada.",
            message: "View Map"
        }
    ]

    return (
        <>
            <div className='h-fit py-10 bg-blue'>
                <div className='w-[95%] m-auto flex flex-col lg:flex-row justify-start gap-10 xl:gap-20 lg:items-center pb-14 border-b-[0.5px] my-10 border-gray-700'>
                    {ContactData.map((item, index) => (
                        <div className='text-left flex flex-col gap-4 border-b-2 pb-5  lg:border-b-0 lg:border-r-2 lg:pr-2 xl:pr-5 border-gold'>
                            <h1
                                className='font-Lora font-semibold text-xl'>
                                {item.text}
                            </h1>
                            <h2
                                className='font-bold font-Para text-2xl mb-4'>
                                {item.Head}
                            </h2>
                            <p className='text-gold font-Lora text-lg font-normal'>{item.message}</p>
                        </div>
                    ))}

                </div>
                <div className="w-[90%] m-auto">
                    <div className="flex flex-col md:flex-row justify-start items-start gap-10 md:justify-between">
                        <div className='flex basis-[40%] flex-col xl:flex-row gap-10 items-start justify-center'>
                            <div>
                                <img src={'https://kgalaw.justinskeete.com/images/horse.png'} alt="Logo" className='w-[75px] h-[100%]' />
                                <h2 className='md:text-2xl lg:text-3xl xl:text-3xl text-white  font-Lora font-bold'>Kim & George</h2>
                            </div>
                            <p className='font-Para text-lg'>lawyer is a business theme perfectly suited legal advisers and offices, lawyers, attorneys, counsels, advocates and other legal and law related services.lawyer started as a sole practitioner providing services to the area community.</p>
                        </div>
                        <div className='basis-[25%]'>
                            <h3 className='text-white font-bold text-xl lg:text-3xl md:mb-2 lg:mb-4'>Quik Link</h3>
                            <div className="flex flex-col gap-0 pl-2">
                                {Menu.map((item, index) => (
                                    <Link to={item.Link} key={index}>
                                        <p className='text-[#eaeaea] text-lg lg:text-xl'>{item.Title}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className='basis-[30%]'>
                            <h3 className='text-white font-bold text-xl lg:text-3xl md:mb-2 lg:mb-4'>Our Servcies</h3>
                            <div className="flex flex-col gap-1 pl-2">
                                {ServiceName.map((item, index) => (
                                    <p className='text-[#eaeaea] text-lg lg:text-xl' key={index}>{item.Title}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer