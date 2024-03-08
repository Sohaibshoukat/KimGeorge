import React from 'react';

const AboutSection = ({ imagePath }) => {

    const ProgressBar = ({ propertyName, percentage }) => {
        return (
            <div className="flex-col items-center justify-between mb-4  ">
                <div className='text-black'>{propertyName}</div>
                <div className="flex items-center ">
                    <div className="w-full h-1 bg-gray-200 rounded-full mr-4">
                        <div className="h-full bg-gold rounded-full" style={{ width: percentage }}></div>
                    </div>
                    <div className='text-black'>{percentage}</div>
                </div>
            </div>
        );
    };


    return (
        <div className='flex flex-col my-2 md:flex-row'>
            <div className='flex w-9/12'>
                <div className="flex items-center justify-center md:w-1/2 md:px-2">
                    <img src={imagePath} alt="About Us" className="rounded-lg shadow-md mb-4 md:mb-0 w-5/6" />
                </div>
                <div className="flex flex-col items-center  w-full md:w-1/2">
                    <p className="text-lg text-gray-700 text-justify w-5/6">
                        Kim George is a business theme perfectly suited legal advisers and offices, lawyers, attorneys, and other legal and law related services. We have started as a sole practitioner providing services to the area community. Aiming to provide high quality legal consultancy, support and results for your legal issues. Using their expertise and experience, law firm documents and builds their clients' cases to obtain the best results they could achieve.
                    </p>
                </div>
            </div>
            <div className='w-4/12 mx-10'>
                <div className='flex flex-col '>
                    <ProgressBar propertyName="Criminal Law" percentage="75%" />
                    <ProgressBar propertyName="Indurance" percentage="50%" />
                    <ProgressBar propertyName="Financial Law" percentage="90%" />
                    <ProgressBar propertyName="Civil Litigation" percentage="60%" />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
