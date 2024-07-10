import React from 'react';

interface Card {
    title: string;
    description: string;
    link: string;
    icon: string;
}

const Card: React.FC<Card> = ({ title, description, link, icon }) => {
    return (
        <div className=" rounded-3xl md:p-12 p-6 transition-transform duration-300 bg-gray-100 hover:bg-gray-200">
            <div className='mb-4'>
                <img src={icon} alt={`${title} icon`} className="md:w-24 w-16 h-auto mr-4" /> 
            </div>
            <div className="flex items-center mb-4">
                <h2 className="text-2xl text-gray-800 font-medium">{title}</h2>
            </div>
            <p className="text-gray-700 mb-4">{description}</p>
        </div>
    );
};

export default Card;
