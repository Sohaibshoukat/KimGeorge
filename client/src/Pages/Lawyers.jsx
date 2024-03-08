import React from 'react';
import Banner from '../Components/Service/Banner';
import Whyus from '../Components/whyus';
import Team from '../Components/Home/Team';
import ImageSlider from '../Components/ImageSlider';

const Lawyers = () => {
  return (
    <>
    <Banner BannerClass={"PracticeBanner"} Head={"Meet Our Lawyers"} Meta={"Our Lawyers"} />
    <Team/>
    <Whyus />
    <div className='w-[95%] md:w-[90%] lg:w-[90%] m-auto my-10 md:my-20 lg:my-28 xl:my-32 flex items-center justify-between flex-col md:flex-row'>
                <div className={`text-left text-black basis-[50%]`}>
                    <h5 className='text-lg lg:text-xl font-Lora font-extrabold mb-2'>Our Pride</h5>
                    <h4 className='text-3xl lg:text-5xl font-Para font-extrabold mb-5'>Our Clients</h4>
                    <p className='text-gray-500 font-Para text-lg md:text-lg m-auto'>Results recommend lawyer Law Firm as a good lawyers office, a lawyered partners of his customers’ business and a honest adviser and consultant for legal situation</p>
                </div>
                <div>
                    <button className='bg-transparent mt-4 md:my-6 lg:my-10 w-fit text-lg md:text-xl font-semibold py-2 px-4  md:py-4 md:px-4 text-[#002349] font-Para border-[#002349] hover:bg-[#002349] ease-in-out duration-300 hover:text-gold border-2'>
                        Find more about us
                    </button>
                </div>
            </div>
    <ImageSlider/>
    </>
  );
}

export default Lawyers