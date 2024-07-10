import React, { useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { Link } from "react-router-dom";
import Grid from './Grid';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Thumb from "../../assets/Portfolio/Thumb.jpg";
import './Portfolio.css'; // Make sure to create this CSS file

const images = {
    "Recent Work": [Thumb, Thumb, Thumb, Thumb, Thumb, Thumb],
    "Design": [Thumb, Thumb],
    "Mockups": [Thumb],
    "Branding": [Thumb, Thumb, Thumb, Thumb],
    
};

const Portfolio: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("Recent Work");

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <div className="container mx-auto h-auto flex flex-col my-12 md:my-24 md:p-0 p-6">
            <header className="w-full md:flex flex-col md:flex-row justify-between items-center">
                <div>
                    <h1 className="text-4xl md:text-6xl font-semibold text-gray-800">
                        Portfolio<span className='text-3xl pl-2'>■</span>
                    </h1>
                </div>
                <div className="md:flex items-center  ">
                    <Link to="/contact" className="relative group flex items-center">
                        <div className="relative flex items-center">
                            <span className="text-gray-800 font-medium text-xl group-hover:text-gray-600">Visit Services</span>
                            <GoArrowUpRight size={25} className="mt-1 ml-2 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-transparent transition-all duration-300 group-hover:bg-gray-600"></div>
                        </div>
                    </Link>
                </div>
            </header>

            <div className='md:mt-10 mt-4'>
                <div className="flex items-center my-8 md:py-8 flex-wrap md:gap-8 gap-4">
                    {Object.keys(images).map((category) => (
                        <button
                            key={category}
                            type="button"
                            className={`text-gray-800 hover:text-gray-600 font-medium transition-colors duration-300 ${selectedCategory === category ? 'border-b-2 border-black' : ''}`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <TransitionGroup className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {images[selectedCategory].map((image, index) => (
                        <CSSTransition key={index} timeout={300} classNames="fade">
                            <Grid image={image} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
        </div>
    );
};

export default Portfolio;
