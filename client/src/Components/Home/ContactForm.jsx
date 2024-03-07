import React from 'react'

const ContactForm = () => {
    return (
        <div className="bg-blue shadow-xl flex flex-col gap-6 py-10 px-4 md:px-8">
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
        </div>
    )
}

export default ContactForm