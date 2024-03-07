import React from 'react'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import Rating from '@mui/material/Rating';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image1 from "../assets/testimonial/1.jpg";
import Image2 from "../assets/testimonial/2.png";
import Image3 from "../assets/testimonial/3.png";
import Image4 from "../assets/testimonial/4.jpg";
import Image5 from "../assets/testimonial/5.png";
import Image6 from "../assets/testimonial/6.jpg";


const Testimonial = () => {


    const TestimonialData = [
        {
            name: "John Smith",
            desc: "Kim George & Associates provided exceptional legal services for our business. Their team of experts guided us through complex legal matters with precision and professionalism. We were impressed by their attention to detail and commitment to achieving the best outcomes for our company.",
            position: "CEO",
            rating: "5",
            image: Image1
        },
        {
            name: "Emily Davis",
            desc: "Working with Kim George & Associates was a seamless experience. They demonstrated in-depth knowledge of the legal landscape and offered valuable insights that were crucial to our decision-making process. I highly recommend their legal services.",
            position: "General Counsel",
            rating: "5",
            image: Image2
        },
        {
            name: "Robert Thompson",
            desc: "Kim George & Associates proved to be a reliable partner for our legal needs. Their team was responsive and efficient, addressing our concerns promptly. Their expertise in contract law was instrumental in securing favorable agreements for our company.",
            position: "Legal Affairs Manager",
            rating: "5",
            image: Image3
        },
        {
            name: "Sophia Martinez",
            desc: "I have been a client of Kim George & Associates for several years, and their legal support has been invaluable. They have a deep understanding of the legal intricacies in our industry and have consistently delivered top-notch service. I trust them for all our legal matters.",
            position: "Business Owner",
            rating: "5",
            image: Image4
        },
        {
            name: "Michael Turner",
            desc: "Kim George & Associates is a legal firm you can rely on. Their dedication to client success is evident in every interaction. From contract reviews to dispute resolution, they handled our legal affairs with expertise and professionalism. Highly recommended!",
            position: "Chief Financial Officer",
            rating: "5",
            image: Image5
        },
        {
            name: "Jennifer Lewis",
            desc: "We engaged Kim George & Associates for legal counsel, and their team exceeded our expectations. Their comprehensive understanding of the law and strategic approach played a pivotal role in the success of our legal endeavors. A trustworthy and competent legal partner.",
            position: "Director of Legal Affairs",
            rating: "5",
            image: Image6
        }
    ];




    return (
        <div className='relative overflow-hidden'>
            <div className='w-[95%] md:w-[80%] m-auto py-10 md:py-20'>
                <div className='m-auto flex items-center justify-between flex-col'>
                    <div className={` text-black text-center`}>
                        <h2 className='text-3xl lg:text-5xl font-Para font-extrabold mb-5'>See What they say</h2>
                        <p className='text-gray-500 lg:max-w-[80%] xl:max-w-[60%] font-Para text-lg md:text-lg m-auto'>we believe in giving back to our clients and providing them with critical legal support, as the need arises</p>
                    </div>
                </div>
                <div className=''>
                    <Swiper
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="h-fit py-8 md:py-16 px-5 md:px-10"
                    >
                        {TestimonialData.map((item, index) => (
                            <SwiperSlide key={index} className='mr-10 m-auto'>
                                <div className='bg-white shadow-2xl h-[100%] w-[100%] py-10 px-8 md:py-20 md:px-16 m-auto' key={index}>
                                    <Rating name="read-only" value={item.rating} readOnly className='mb-5 md:mb-10' />
                                    <p className='text-black text-lg md:text-2xl mb-6'>{item.desc}</p>
                                    <div className='flex flex-row gap-4'>
                                        <img src={item.image} alt="" className='w-[50px] h-[50px] md:w-[75px] md:h-[75px] rounded-[50%]' />
                                        <div className='flex flex-col gap-0 text-black'>
                                            <h2 className='text-xl md:text-3xl font-bold'>{item.name}</h2>
                                            <h3 className='text-lg md:text-2xl font-light'>{item.position}</h3>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Testimonial