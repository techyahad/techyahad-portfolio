import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

interface CardProps {
    title: string;
    description: string;
    imgSrc: string;
}

const Card: React.FC<CardProps> = ({ title, description, imgSrc }) => {
    return (
        <div className="font-serif flex flex-col mt-6 text-gray-700 bg-white border w-full lg:w-96">
            <div className="lg:h-56 h-48">
                <img
                    src={imgSrc}
                    className="w-full h-full object-cover"
                    alt={title}
                />
            </div>
            <div className="p-6">
                <h5 className="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {title}
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    {description}
                </p>
            </div>
            <div className="p-6 pt-0 flex items-center space-x-1 group">
                <p className="font-medium">Read More</p>
                <GoArrowUpRight size={20} className="rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
        </div>
    );
};

export default Card;
