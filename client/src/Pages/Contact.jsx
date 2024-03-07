import Banner from "../Components/Service/Banner";
import ContactForm from "../Components/Home/ContactForm";
import {IoIosCall, IoMdMail } from "react-icons/io"
import { IoLocation } from "react-icons/io5";
import Location from "../Components/Home/Location";


const Contact = () => {

    const ContactData = [
        {
            text: "Phone",
            Head: "+ 473 435 4990",
            Icon: IoIosCall
        },
        {
            text: "Send Us Message !",
            Head: "kgeorge@kimgeorgelaw.com",
            Icon:IoMdMail
        },
        {
            text: "Visit Our Office !",
            Head: "St. Georges Grenada.",
            Icon:IoLocation
        }
    ]

    return (
        <>
            <div className="relative overflow-x-hidden">

                <Banner BannerClass={"PracticeBanner"} Head={"CONTACT US"} Meta={"We Wanna Hear From You"} />

                <div className='w-[95%] md:w-[90%] lg:w-[90%] m-auto my-20 flex items-center justify-between flex-col md:flex-row'>
                    <div className={`text-left text-black md:basis-[70%] xl:basis-[50%]`}>
                        <h3 className='text-lg lg:text-xl font-Lora font-extrabold mb-2'>Get In Toutch</h3>
                        <h2 className='text-3xl lg:text-5xl font-Para font-extrabold mb-5'>CONTACT US</h2>
                        <p className='text-gray-500 font-Para text-lg md:text-lg m-auto'>Feel free to get in touch with any enquiries and one of our friendly members of staff will get back to you as soon as possible, we are here to help !</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between gap-8 w-[95%] md:w-[90%] mt-0 mb-20 m-auto">
                    <div className="basis-[60%]">
                        <ContactForm />
                    </div>
                    <div className='basis-[40%] flex flex-col gap-10'>
                        <div className="flex flex-col md:flex-row justify-start gap-4">
                            <div className="flex basis-[50%] w-[100%] flex-col gap-6 text-black">
                                <h2 className="text-gold font-Para text-2xl font-medium">Phone</h2>
                                <div className="flex gap-2 items-center text-lg font-Para font-light">
                                    <IoIosCall className="text-3xl"/>
                                    <h4>+473 435 4990</h4>
                                </div>
                            </div>
                            <div className="flex basis-[50%] flex-col gap-6 text-black">
                                <h2 className="text-gold font-Para text-2xl font-medium">Email</h2>
                                <div className="flex gap-2 items-center text-lg font-Para font-light">
                                    <IoMdMail className="text-3xl"/>
                                    <h4>kgeorge@kimgeorgelaw.com</h4>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 text-black">
                                <h2 className="text-gold font-Para text-2xl font-medium">Office</h2>
                                <div className="flex gap-2 items-center text-lg font-Para font-light">
                                    <IoLocation className="text-3xl"/>
                                    <h4>St. Georges Grenada.</h4>
                                </div>
                            </div>
                    </div>
                </div>

            </div>

            <Location/>
        </>
    );
};

export default Contact;
