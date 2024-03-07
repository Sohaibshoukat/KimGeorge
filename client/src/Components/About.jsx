import React from 'react'
import { GiClawHammer } from 'react-icons/gi';
import { MdGroups2 } from 'react-icons/md';
import { BiSolidDiscount } from "react-icons/bi"
import { GoLaw } from "react-icons/go"


const About = () => {

  const Data = [
    {
      Head: "Get Your Legal Advice",
      Para: "Post your question and get free legal advice directly from our experienced lawyers, We are here to help you.",
      icon: GiClawHammer
    },
    {
      Head: "Work With Expert Lawyers",
      Para: "Our lawyers are expertise and experts in all law fields, They will obtain the best results they could achieve.",
      icon: MdGroups2
    },
    {
      Head: "Great Discounted Rates",
      Para: "If lawyer accept your case, we'll never require you to pay huge fees or expenses as we work with alow cost.",
      icon: BiSolidDiscount
    },
    {
      Head: "Review Case Documents",
      Para: "Get a thorough review of your legal documents by an expert attorney for as little as $0 per document.",
      icon: GoLaw
    }
  ]


  return (
    <>
      <div className='bg-[#002349] lg:h-[100%] xl:h-[100vh] relative  w-[100%]'>
        <div className='flex flex-col xl:flex-row justify-between items-center m-auto h-[100%] md:gap-4 lg:gap-10'>
          <div className='relative hidden xl:block xl:basis-[45%] md:h-[100%] w-[100%]'>
            <img src="https://kgalaw.justinskeete.com/images/help-area-bg.png" alt="" className='h-[100%] w-[100%]' />
          </div>

          <div className='basis-[50%] px-10 lg:px-20 py-20 xl:py-0 xl:px-0'>
            <h2 className='text-white text-2xl font-Para md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 text-center xl:text-left xl:mb-5'>WE ARE HERE TO PROVIDE<br/> LEGAL HELP</h2>
            <p style={{ whiteSpace: "pre-wrap" }} className='text-white  font-Lora font-light lg:font-normal text-base text-center xl:text-left  xl:text-lg xl:max-w-[80%] lg:leading-7 mb-4'>
              In lawyer, we are aiming to provide high quality legal consultancy, support and results for your legal issues.
            </p>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-8 mt-10 mb-0 xl:my-10 lg:w-[90%]">
              {Data.map((item, index) => (
                <div className="flex flex-row justify-between text-white gap-6">
                  <div className="basis-[15%] py-2">
                    <item.icon  className='text-5xl text-[#dcb775] font-extrabold'/>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h3 className='text-xl font-Para font-bold'>{item.Head}</h3>
                    <p className='font-Para text-base text-gray-400'>{item.Para}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About