import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import image from "../../../assets/images/aha.jpg"
import { Link } from 'react-scroll';




const Main: React.FC = () => {
    return (
        <div className="container mx-auto font-serif my-16">
            <div className='flex items-center lg:my-40 my-12'>
                {/* Left Side (Image) */}
                <div className="lg:w-1/2 flex justify-center lg:block hidden">
                    <img src={image} alt="Mockup" className="w-[530px] h-[530px] object-cover rounded" />
                </div>

                <div className="lg:w-1/2 w-full space-y-10 lg:py-0 lg:mb-12 mb-6 lg:px-0 px-3">
                    <div className='space-y-6'>
                        <h1 className="font-medium text-gray-800 lg:text-6xl text-4xl lg:leading-[58px]">
                            Hello! I’m <span className='text-gray-500'> Abdul Ahad </span>, a Product Designer and Developer.
                        </h1>
                        <p className="lg:block hidden text-gray-600 font-light text-[19.9px] leading-6">
                            Focused on building digital products and brands, I help startups bring their ideas to life, working with multiple teams to create impactful, user-focused solutions. Talk to me about user behavior, accessibility, and tech!
                        </p>
                        <p className="lg:hidden block text-gray-600 font-light lg:text-[19.9px] text-lg leading-6">
                            I help startups bring their ideas to life, working with multiple teams to create impactful, user-focused solutions. Talk to me about user behavior, accessibility, and tech!
                        </p>
                    </div>
                    <div className="space-x-4 flex">
                        {/* Button with onClick to scroll */}
                        <Link
                        to="contact" smooth={true} duration={500}
                            className="flex items-center justify-center lg:py-3 bg-gray-800 lg:px-6 px-4 py-2 lg:text-xl text-lg group relative"
                           
                        >
                            <div className='flex items-center gap-1 justify-center text-gray-300'>
                                <span className="">Let's Talk</span>
                                <GoArrowUpRight className="pt-1 lg:w-6 lg:h-6 w-4 h-4 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                            </div>
                        </Link>
                        <button className="text-black px-4 py-2 text-lg font-medium lg:font-normal lg:text-xl">
                            My Journey
                        </button>
                    </div>
                </div>
            </div>
            {/* Additional content */}
            <hr className='lg:hidden block' />
            <div className='w-full lg:block hidden'>
                <hr className="mt-4" />

                <div className="flex flex-col lg:flex-row justify-between items-center h-auto lg:h-[350px] space-y-20 lg:space-y-0 py-8">
                    <div className="text-center space-y-2">
                        <h2 className="text-6xl text-gray-800 font-semibold">15+</h2>
                        <p className="text-xl text-gray-500">Years of Experience</p>
                    </div>

                    <div className="text-center space-y-2">
                        <h2 className="text-6xl text-gray-800 font-semibold">100+</h2>
                        <p className="text-xl text-gray-500">Projects Completed</p>
                    </div>

                    <div className="text-center space-y-2">
                        <h2 className="text-6xl text-gray-800 font-semibold">60+</h2>
                        <p className="text-xl text-gray-500">Satisfied Clients Globally</p>
                    </div>

                    <div className="text-center space-y-2">
                        <h2 className="text-6xl text-gray-800 font-semibold">20+</h2>
                        <p className="text-xl text-gray-500">Collaborated Startups</p>
                    </div>
                </div>

                <hr className="mt-4" />
            </div>
        </div>
    );
};

export default Main;
