import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <div className='relative'>
            <div className='w-[95%] md:w-[90%] lg:w-[90%] m-auto my-20 flex items-center justify-between flex-col md:flex-row'>
                <div className={`text-left text-black md:basis-[70%] xl:basis-[50%]`}>
                    <h3 className='text-lg lg:text-xl font-Lora font-extrabold mb-2'>Don’t Hesitate To Ask</h3>
                    <h2 className='text-3xl lg:text-5xl font-Para font-extrabold mb-5'>FREE CONSULTATION</h2>
                    <p className='text-gray-500 font-Para text-lg md:text-lg m-auto'>Feel free to get in touch with any enquiries and one of our friendly members of staff will get back to you as soon as possible, we are here to help !</p>
                </div>
            </div>
            <div className="w-[95%] md:w-[90%] m-auto my-5 md:my-10">
                {/* <div className="bg-blue shadow-xl flex flex-col gap-6 py-10 px-4 md:px-8">
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                        <input 
                            type="text" 
                            placeholder='Your Name' 
                            className='
                                border- w-[100%] bg-transparent border-b-2 border-gray-200  text-white
                                placeholder:text-gray-300 font-Para text-xl py-2 
                                focus-visible:outline-0 focus-visible:border-b-2  focus-visible:border-white
                                ease-in-out duration-300
                            ' 
                        />
                        <input 
                            type="email" 
                            placeholder='Your Email' 
                            className='
                                border- w-[100%] bg-transparent border-b-2 border-gray-200  text-white
                                placeholder:text-gray-300 font-Para text-xl py-2 
                                focus-visible:outline-0 focus-visible:border-b-2  focus-visible:border-white
                                ease-in-out duration-300
                            ' 
                        />
                        <input 
                            type="text" 
                            placeholder='Subject' 
                            className='
                                border- w-[100%] bg-transparent border-b-2 border-gray-200  text-white
                                placeholder:text-gray-300 font-Para text-xl py-2 
                                focus-visible:outline-0 focus-visible:border-b-2  focus-visible:border-white
                                ease-in-out duration-300
                            ' 
                        />
                    </div>
                    <textarea 
                        name="" 
                        id="" 
                        placeholder='Case Details' 
                        rows="5" 
                        className='
                                border- w-[100%] bg-transparent border-b-2 border-gray-200  text-white
                                placeholder:text-gray-300 font-Para text-xl py-2 
                                focus-visible:outline-0 focus-visible:border-b-2  focus-visible:border-white
                                ease-in-out duration-300
                            ' >
                    </textarea>
                    <button className='px-2 md:px-4 lg:px-6 py-2 md:py-3  text-white  text-base  md:text-lg lg:text-xl font-Para font-bold bg-gold border-2 w-fit hover:text-gold hover:bg-transparent border-[#dcb775] duration-300 ease-in-out'>SEND YOUR REQUEST</button>
                </div> */}
                <ContactForm/>
            </div>

        </div>
    )
}

export default Contact