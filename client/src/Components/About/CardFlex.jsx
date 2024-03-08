import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardFlex = () => {
  const Card = ({ logo, title, description }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm m-4 px-4">
      <div className="w-10">
        <FontAwesomeIcon icon={logo} />
      </div>
      <div className="p-4">
        <h5 className="text-xl text-black font-medium mb-2">{title}</h5>
        <p className="text-gray-700">{description}</p>
        <a href="#" className="text-black hover:text-gold font-medium inline-flex items-center mt-4">
          More
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </a>
      </div>
    </div>
  );

  return (
    <div className='flex flex-row'>
      <Card logo="fa-solid fa-child" title="Family Law" description="Family law consists of a body of statutes and case precedents that govern the legal responsibilities between individuals who share a domestic connection." />
      <Card logo="fa-solid fa-fire" title="Fire Accident" description="Fire accidents can result in catastrophic personal injury and devastating damage. Every year, billions of dollars in property damage occurs as a result of fire." />
      <Card logo="fa-solid fa-shopping-cart" title="Shoplifting" description="Shoplifting law deals with theft crimes that occur in retail establishments. Perpetrators are shoppers who enter the establishment with permission. " />
      <Card logo="fa-solid fa-female" title="Drug Offences" description="The legal restrictions placed on the use of controlled drugs are aimed at preventing drug misuse. The principal offences are contained in the Misuse of Drugs Act 1971." />
    </div>
  );
};

export default CardFlex;
