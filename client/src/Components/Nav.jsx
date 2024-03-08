import React, { useEffect, useState } from 'react'
import logo from "../assets/Logo2.png"
import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from 'react-router-dom'
import { IoMdClose } from "react-icons/io"
import { Hidden } from '@mui/material'

const Nav = () => {

    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const Menu = [
        {
            Title: "Home Page",
            Link: "/",
        },
        {
            Title: "About Us",
            Link: "/About",
        },
        {
            Title: "Services",
            Link: "/services",
        },
        {
            Title: "Contact us",
            Link: "/contact",
        },
        {
            Title:"Our Lawyers",
            Link:"/Lawyer"
        }
    ];

    const [MobileOpen, setMobileOpen] = useState(false)

const [display, setdisplay] = useState(false);
    return (
        <>
            <div className={`${scrollY > 100 ? "bg-[#002349]/70 navanimate ":"bg-transparent"}  fixed z-[10000000] px-4 md:px-14 lg:px-14 xl:px-24  top-0 w-[100%] left-0 right-0 ease-in-out duration-200`}>
                <div className="flex flex-row justify-between items-center py-4">
                    <div className='flex flex-row gap-4 items-center'>
                        <div className='lg:w-[50px] w-[25px] '>
                            <Link to={'/'}>
                                <img src={'https://kgalaw.justinskeete.com/images/horse.png'} alt="Logo" className='w-[100%] h-[100%]' />
                            </Link>
                        </div>
                        <h2 className='md:text-2xl lg:text-3xl xl:text-4xl text-white  font-Lora font-bold'>Kim George</h2>
                    </div>
                    <div className={`hidden ${display&&'hidden'}  lg:flex flex-row md:gap-1 lg:gap-4 xl:gap-8 items-center text-white`} id='nav'>
                        {Menu.map((item, index) => (
                            <Link to={item.Link} key={index} onClick={()=>{
                                setdisplay(true);
                                setTimeout(() => {
                                    setdisplay(false)
                                }, 500);
                            }}>
                                <h3 className={`${window.location.pathname == item.Link && 'border-b-2 border-[#dcb775] text-[white] bg-[#dcb775]'} lg:text-lg xl:text-xl font-bold  hover:border-[#dcb775] font-Para hover:bg-transparent hover:text-[#dcb775] border-2 py-2 lg:px-2 xl:px-4 border-transparent duration-300 ease-in-out`}>{item.Title}</h3>
                            </Link>
                        ))}
                    </div>
                    <div className='block lg:hidden'>
                        {!MobileOpen && <GiHamburgerMenu className='text-white text-4xl cursor-pointer' onClick={() => { setMobileOpen(!MobileOpen); }} />}
                    </div>
                </div>
            </div>
            {MobileOpen && (
                <div className='fixed lg:hidden z-[10000000000000] bg-blue/50 w-[100vw] h-[100vh] duration-300 ease-in-out'>
                    <div className='w-fit absolute top-2 right-2'>
                        <IoMdClose className='text-white text-6xl cursor-pointer' onClick={() => { setMobileOpen(!MobileOpen) }} />
                    </div>
                    <div className='flex justify-center flex-col text-white h-[100%] w-[100%] items-center gap-4'>
                        {Menu.map((item, index) => (
                            <Link to={item.Link} key={index}>
                                <h3 className={`${window.location.pathname == item.Link && 'border-gold text-white bg-gold'} text-xl font-bold font-Para  hover:border-gold hover:bg-gold hover:text-white border-2 py-2 px-4 border-transparent duration-300 ease-in-out`} onClick={() => { setMobileOpen(!MobileOpen) }}>{item.Title}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Nav