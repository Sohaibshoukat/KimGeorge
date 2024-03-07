import React from 'react'
import { FaCheck } from 'react-icons/fa6'

const Resultpopup = () => {
    return (
        <>
            <div className='w-[100vw] h-[100vh] fixed z-[1000000] top-0 bg-black/90 flex justify-center items-center'>
                <div className="zoomanimation bg-white w-[90%] md:w-[60%] xl:w-[40%] h-fit xl:h-fit py-10 shadow-xl  z-[100000000] absolute rounded-2xl">
                    <div className="flex flex-col justify-center items-center text-center">
                        <FaCheck className='text-6xl md:text-8xl bg-[#0f0122] rounded-full p-2 md:p-3 font-bold mb-5 md:mb-10 text-[#00b01d]' />
                        <h1 className='text-black font-bold text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-4'>Vielen Dank für Ihre Nachricht</h1>
                        <h2 className='text-[#939393] font-bold text-lg md:text-2xl lg:text-3xl'>Wir werden uns bald mit Ihnen in Verbindung setzen</h2>
                        <p></p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Resultpopup