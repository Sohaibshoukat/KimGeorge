import React, { useEffect, useRef, useState } from 'react'
import { MdRealEstateAgent } from "react-icons/md"
import { IoIosBusiness } from "react-icons/io"
import { FaPerson } from 'react-icons/fa6';
import { GrRestroomWomen } from "react-icons/gr"


const Service = () => {

  const [isVisible, setIsVisible] = useState(false);
  const whyUsRef = useRef(null);

  const handleScroll = () => {
    const top = whyUsRef.current.getBoundingClientRect().top;
    const isVisible = top < window.innerHeight;
    if (isVisible) {
      setIsVisible(isVisible);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const ServiceData2 = [
    {
      Head: "Wills & Probate",
      Para: "Family law is an area of the law that deals with family matters & domestic relations, including adoption and surrogacy.",
      Icon: FaPerson
    },
    {
      Head: "Real Estate",
      Para: "Family law is an area of the law that deals with family matters & domestic relations, including adoption and surrogacy.",
      Icon: MdRealEstateAgent
    },
    {
      Head: "Companies and Businesses",
      Para: "Family law is an area of the law that deals with family matters & domestic relations, including adoption and surrogacy.",
      Icon: IoIosBusiness
    },
    {
      Head: "Dispute Resolution",
      Para: "Family law is an area of the law that deals with family matters & domestic relations, including adoption and surrogacy.",
      Icon: GrRestroomWomen
    }
  ]

  return (
    <>
      <div className='relative'>
        <div ref={whyUsRef} className='w-[95%] md:w-[90%] lg:w-[90%] m-auto my-10 md:my-20 lg:my-28 xl:my-32 flex items-center justify-between flex-col md:flex-row'>
          <div className={`text-left text-black basis-[50%] ${isVisible && 'LeftMoveAnimation'}`}>
            <h3 className='text-lg lg:text-xl font-Lora font-extrabold mb-2'>Want Help</h3>
            <h2 className='text-3xl lg:text-5xl font-Para font-extrabold mb-5'>PRACTICE AREAS</h2>
            <p className='text-gray-500 font-Para text-lg md:text-lg m-auto'>In lawyer, we have got a wide range of legal services. We practice general civil law for businesses, individuals, and local governments too.is abusiness theme perfectly suited legal advisers and offices, lawyers, attorneys, counsels, advocates and other legal and law related services.</p>
          </div>
          <div className={`${isVisible && 'LeftMoveAnimation'}`}>
            <button className='bg-transparent mt-4 md:my-6 lg:my-10 w-fit text-lg md:text-xl font-semibold py-2 px-4  md:py-4 md:px-4 text-[#002349] font-Para border-[#002349] hover:bg-[#002349] ease-in-out duration-300 hover:text-gold border-2'>
              View All Practice Areas
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0 w-[90%] m-auto'>
          {ServiceData2.map((item, index) => (
            <div className='relative group ease-in-out duration-300 overflow-hidden'>
              <div className="flex flex-col items-center gap-4 py-12 md:py-20 px-8 border-[1px] border-gray-200">
                <item.Icon className='text-[#dcb775] text-8xl font-semibold' />
                <h2 className='text-2xl font-Para font-bold text-black text-center'>{item.Head}</h2>
              </div>
              <div className="absolute top-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-0%] translate-y-[100%] bottom-0 bg-[#002349] w-[100%] h-[100%] group-hover:z-50 ease-in-out duration-300">
                <div className="flex flex-col items-center px-2 gap-4 py-2 md:py-4 ease-in-out duration-300">
                  <item.Icon className='text-[#dcb775] text-8xl font-semibold' />
                  <h2 className='text-2xl font-Para font-bold text-white text-center'>{item.Head}</h2>
                  <p className='text-sm md:text-base text-center font-Para text-gray-200'>{item.Para}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default Service