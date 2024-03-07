import React from 'react'

const Location = () => {
    return (
        <div className='w-[100%]'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15607.392555409551!2d-61.760390403743976!3d12.053967810932328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c38217869008599%3A0x2325d900d3b5c2a!2sSt%20George&#39;s%2C%20Grenada!5e0!3m2!1sen!2s!4v1709770277817!5m2!1sen!2s"
                height="450"
                frameborder="0"
                style={{ border: 0,width:"100%" }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
            />
        </div>
    )
}

export default Location