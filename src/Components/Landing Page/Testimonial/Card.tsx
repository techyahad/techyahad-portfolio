import React from 'react'
import { FaStar } from "react-icons/fa";

const Card = ({ name, date, reviewText }) => {
    return (
        <div className="lg:px-12 px-10 border bg-white h-[400px]   rounded-lg  lg:py-20 py-10 text-center">
            {/* Profile image */}
            <div className="relative w-24 h-24 mx-auto mb-6">
                <img
                    src="https://via.placeholder.com/100" // Replace with actual user image URL
                    alt="User Profile"
                    className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
                />
                {/* Company logo */}
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <img
                        src="https://via.placeholder.com/20" // Replace with actual company logo URL
                        alt="Company Logo"
                        className="w-6 h-6 rounded-full object-cover"
                    />
                </div>
            </div>

            {/* Star rating */}
            <div className="flex justify-center mb-6">
                {[...Array(4)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-500" />
                ))}
                <FaStar className="text-gray-300" /> {/* For 4.0 rating */}
            </div>

            {/* Review text */}
            <p className="text-gray-600 mb-10">
                {reviewText}
            </p>

            {/* User name and date */}
            <h3 className="font-medium text-lg">{name}</h3>
            <p className="text-gray-500 text-sm">{date}</p>
        </div>
    );
};

export default Card;
