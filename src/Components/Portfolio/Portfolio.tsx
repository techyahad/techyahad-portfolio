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
        <div className="container mx-auto h-auto flex flex-col my-24 md:p-0 p-6">
            <div className="container mx-auto flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-6xl text-gray-800 font-semibold mb-6">Discover my Creative Projects</h1>
                    <p className="text-gray-600 text-lg max-w-4xl">Journey through our diverse projects, unveiling innovation, creativity, and excellence.</p>
                </div>
            </div>
            <div className=''>
                <div className=" my-8 md:py-8 space-x-4 ">
                    {Object.keys(images).map((category) => (
                        <button
                            key={category}
                            type="button"
                            className={`text-gray-800  font-semibold  hover:text-gray-600  transition-colors duration-300 ${selectedCategory === category ? 'border-b-2 border-black' : ''}`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <TransitionGroup className="creative-grid">
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
