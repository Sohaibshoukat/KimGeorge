import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import WorkOffice from "../assets/WorkOffice.png"

const Prsence = () => {
    const Data = [
        "Unsere Webseiten",
        "Aktive Social-Media-Prasenz",
        "Hochwertige Inhalte",
        "Effektives Marketing"
    ]
    return (
        <div className='w-[95%] md:w-[90%] xl:w-[80%] pb-20 m-auto'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl text-black font-bold text-center'>Warum die RICHTIGE Online-Prasenz so wichtig ist?</h1>
            <p className='text-black text-center text-xl font-normal py-6'>Enie vernachlassigte Online-Prasenz birgt das Risiko, Kunden zu verlieren Und im Wettbewerb zuruckzufallen</p>
            <div className="flex flex-col-reverse lg:flex-row  justify-between items-center my-10">
                <div className="basis-[45%] w-[100%] h-[100%]">
                    <img src={WorkOffice} alt="" className='w-[100%] h-[100%] rounded-xl' />
                </div>
                <div className="basis-[50%]">
                    <h2 className='text-[#002349] font-bold text-2xl md:text-3xl mb-8'>lhre Konversionen um bis zu 100% zu steigern durch:</h2>
                    {/* <p className='text-gray-400 font-light text-lg mb-8'>Plain text</p> */}
                    <div className="flex flex-col gap-4">
                        {Data.map((item, index) => (
                            <div className="flex flex-row gap-2" key={index}>
                                <FaCheck className='text-white text-3xl md:text-4xl border-2 bg-[#002349] border-[#002349] p-[0.35rem] rounded-full' />
                                <h4 className='text-xl md:text-2xl font-semibold text-black'>{item}</h4>
                            </div>
                        ))}
                    </div>
                    <Link to={"/contact"}>
                        <button className='text-white border-2 border-[#002349] bg-[#002349] text-lg md:text-xl font-medium rounded-full hover:bg-white hover:text-[#002349] duration-300 ease-in-out py-2 px-4 md:py-3 md:px-6 my-8'>Erfahr mehr durch ein Erstgesprach</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Prsence