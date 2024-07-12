import React from 'react';
import { HiOutlineArrowLongRight } from "react-icons/hi2";

interface Card {
    title: string;
    description: string;
    link: string;
    icon: string;
}

const Card: React.FC<Card> = ({ title, description, icon }) => {
    return (
        <div className=" rounded-3xl md:p-12 p-6 cursor-pointer transition-transform duration-300 bg-gray-100 hover:bg-gray-200">
            <div className='mb-4'>
                <img src={icon} alt={`${title} icon`} className="md:w-24 w-16 h-auto mr-4" />
            </div>
            <div className="flex items-center mb-4">
                <h2 className="text-2xl text-gray-800 font-medium">{title}</h2>
            </div>
            <p className="text-gray-500 mb-4">{description}</p>
            <button className='text-gray-600'>
                <HiOutlineArrowLongRight size={30} />
            </button>
        </div>
    );
};

export default Card;
