import React from 'react';
import image from "../../../assets/images/Mockuo.jpg"
import { FaCalendarAlt, FaClock } from 'react-icons/fa'


const Card = () => {
    return (
        <div className="w-full rounded-xl overflow-hidden border bg-white flex">
            <img className="w-1/2" src={image} />
            <div className="px-6 py-4">
                <div className="font-medium text-xl mt-4"> Exploring the JAMstack: Modern Web Development</div>
                <div className=" gap-6 flex items-center mt-6 ">
                    <div className="flex items-center text-gray-600 text-lg gap-2">
                        <FaCalendarAlt size={15} />
                        October 8, 2022
                    </div>
                    <div className="flex items-center justify-center text-gray-600 text-lg gap-2 ">
                        <FaClock size={15} />
                        9 min read
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
