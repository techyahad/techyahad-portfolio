import React from 'react';

interface ServiceCardProps {
    heading: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ heading, description }) => {
    return (
        <div className="rounded-xl flex-1 md:p-12 p-6 border  transition-transform duration-300 bg-gray-100 hover:bg-gray-200 group">
            <div className="flex items-center mb-4">
                <h2 className="text-2xl text-gray-800 font-medium">{heading}</h2>
            </div>
            <p className="text-gray-500 mb-4">{description}</p>

        </div>
    );
}

export default ServiceCard;
