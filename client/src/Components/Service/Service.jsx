import React from 'react'
import { MdRealEstateAgent } from "react-icons/md"
import { IoIosBusiness } from "react-icons/io"
import { FaPerson } from 'react-icons/fa6';
import { GrRestroomWomen } from "react-icons/gr"

const ServiceSec = () => {
    const ServiceData2 = [
        {
            Head: "Wills & Probate",
            Para: "Family law consists of a body of statutes and case precedents that govern the legal responsibilities between individuals who share a domestic connection.",
            Image:"Will.png"
        },
        {
            Head: "Real Estate",
            Para: "Family law consists of a body of statutes and case precedents that govern the legal responsibilities between individuals who share a domestic connection.",
            Image:"realestate.png"
        },
        {
            Head: "Companies and Businesses",
            Para: "Family law consists of a body of statutes and case precedents that govern the legal responsibilities between individuals who share a domestic connection.",
            Image:"business.png"
        },
        {
            Head: "Dispute Resolution",
            Para: "Family law consists of a body of statutes and case precedents that govern the legal responsibilities between individuals who share a domestic connection.",
            Image:"dispute.png"

        }
    ]
    return (
        <div className='relative my-20'>
            <div className='w-[95%] md:w-[90%] lg:w-[90%] m-auto flex items-center justify-between flex-col md:flex-row'>
                <div className={` text-black text-center mb-20`}>
                    <h2 className='text-3xl lg:text-5xl font-Para font-extrabold mb-5'>Our Service Our Pride</h2>
                    <p className='text-gray-500 lg:max-w-[80%] xl:max-w-[60%] font-Para text-lg md:text-lg m-auto'>Since 1900, lawyer start working aiming to build awide range circle of customers, and to win all the cases brought by the customers, have alook in our numbers.</p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5 lg:gap-10 w-[90%] lg:w-[90%] xl:w-[80%] m-auto'>
                {ServiceData2.map((item, index) => (
                    <div className='relative group ease-in-out duration-300 overflow-hidden h-[100%]' key={index}>
                        <div className="flex flex-col ">
                            <div className='basis-[30%] w-[100%]'>
                                <img src={`./src/assets/Services/${item.Image}`} alt="" className='w-[100%] h-[400px]' />
                            </div>
                            <div className='bg-blue p-6 text-white flex flex-col gap-4'>
                                <h2 className='font-Para text-2xl lg:text-3xl font-bold group-hover:text-gold ease-in-out duration-300'>{item.Head}</h2>
                                <p className='text-para text-xl font-light '>{item.Para}</p>
                                <button 
                                    className='
                                        bg-gold py-2 px-4 w-fit font-bold mt-8 mb-4 font-Para text-xl border-2 
                                        border-gold group-hover:bg-transparent group-hover:text-gold
                                        ease-in-out duration-300
                                    '
                                >
                                        Read More
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServiceSec