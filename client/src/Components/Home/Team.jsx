import React from 'react'
import image1 from "../../assets/Team/team-member-1.png"
import image2 from "../../assets/Team/team-member-2.png"
import image3 from "../../assets/Team/team-member-3.png"

const Team = () => {

    const Team=[
        {
            Name:"Kim C George",
            Position:"CEO & Manager",
            Image:image1,
            Des:"Using her expertise and experience, Kimd documents and builds her customers cases to obtain the best results they could achieve in their particular situation."
        },
        {
            Name:"Shariba Lewis",
            Position:"Civil Lawyer",
            Image:image2,
            Des:"Using her expertise and experience, Kimd documents and builds her customers cases to obtain the best results they could achieve in their particular situation."
        },
        {
            Name:"Nefta Francis",
            Position:"Business Lawyer",
            Image:image3,
            Des:"Using her expertise and experience, Kimd documents and builds her customers cases to obtain the best results they could achieve in their particular situation."
        }
    ]


  return (
    <div className='relative'>
    <div className='w-[95%] md:w-[90%] lg:w-[90%] m-auto my-10 md:my-20 lg:my-28 xl:my-32 flex items-center justify-between flex-col md:flex-row'>
      <div className={`text-left text-black basis-[50%]`}>
        <h3 className='text-lg lg:text-xl font-Lora font-extrabold mb-2'>Our Legal Team</h3>
        <h2 className='text-3xl lg:text-5xl font-Para font-extrabold mb-5'>MEET OUR ATTORNEYS</h2>
        <p className='text-gray-500 font-Para text-lg md:text-lg m-auto'>Each lawyer at lawyer law firm focuses exclusively on civil matters, we have choosed our lawyers taking into account their experience and ability to handle all cases.</p>
      </div>
      <div>
        <button className='bg-transparent mt-4 md:my-6 lg:my-10 w-fit text-lg md:text-xl font-semibold py-2 px-4  md:py-4 md:px-4 text-[#002349] font-Para border-[#002349] hover:bg-[#002349] ease-in-out duration-300 hover:text-gold border-2'>
          Meet the Whole Team
        </button>
      </div>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 w-[80%] m-auto'>
        {Team.map((item,index)=>(
            <div className='relative flex flex-col group items-center gap-0 overflow-hidden' key={index}>
                <div className='w-[100%] relative'>
                    <img src={item.Image} alt="" className='w-[100%] h-[100%]' />
                    <div className='absolute z-50 translate-x-[-100%] opacity-0 bg-blue/50 items-center flex flex-col justify-center text-center group-hover:translate-x-0 group-hover:opacity-100 top-0 bottom-0 w-[100%] h-[100%] ease-in-out duration-300'>
                        <p className='text-lg font-Para px-4 font-normal'>{item.Des}</p>
                    </div>
                </div>
                <div className='flex bg-blue w-[100%] h-[100%] py-5  text-white flex-col items-center text-center gap-2'>
                    <h2 className='text-gold text-2xl font-Para font-bold'>{item.Name}</h2>
                    <h4 className='font-Lora text-lg'>{item.Position}</h4>
                </div>
            </div>
        ))}
    </div>
  </div>
  )
}

export default Team