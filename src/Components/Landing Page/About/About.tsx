import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom"
import image from "../../../assets/images/1.jpg"

import { FiArrowRight } from 'react-icons/fi'; // Import arrow icon



const About: React.FC = () => {
    return (
        <section className=" md:my-32 my-12 font-serif   relative bg-cover bg-center h-auto flex items-center" >

            <div className='container mx-auto lg:px-0 px-3 '>
                <h1 className="block lg:hidden  text-4xl text-gray-800 font-medium mb-6">About me. </h1>

                <div className=" flex flex-col md:flex-row  lg:mt-24  items-center justify-between">
                    {/* Left Section */}

                    <div className="w-full  md:w-1/3 mb-4 flex ">
                        {/* Dark gray background div */}

                        {/* Image with responsive adjustments */}
                        <img
                            src={image}
                            alt="Description"
                            className="relative z-10 w-full h-auto md:w-auto md:h-full"
                        />
                    </div>

                    {/* Right Section */}

                    <div className="w-full md:w-1/2 mb-8 lg:mb-2">
                        <div className="container mx-auto flex items-center ">
                            <div className="">
                                <h1 className=" lg:block hidden lg:text-7xl text-4xl text-gray-800 font-medium mb-6">A Little Intro <span className='text-gray-500'>About me.</span> </h1>

                            </div>
                        </div>

                        <p className="text-lg md:text-xl text-gray-600 md:mb-10 mb-4 ">
                            I'm a passionate UI/UX designer and front-end developer based in Sindh, Pakistan. Currently, I'm an undergraduate computer science student, balancing my academic pursuits with my love for technology and modern tech stacks. I specialize in creating visually appealing and highly functional web applications using React.js and TypeScript.
                        </p>

                        <div className="cursor-pointer mt-12 lg:block hidden">
                            <Link to="/about" className="flex items-center justify-center bg-gray-800 text-gray-100 lg:text-gray-100 py-3 lg:over:bg-gray-800 px-4 w-48 border-2 font-normal text-xl group relative">
                                <div className='flex items-center gap-1 justify-center group-hover:text-gray-300'>
                                    <span className="">My Journey</span>
                                    <GoArrowUpRight size={25} className="pt-1 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                </div>
                            </Link>
                        </div>

                        <div className="flex mt-6 items-center justify-center lg:hidden block">
                            <button
                                className="flex items-center px-6 py-2 bg-gray-800 text-white  rounded hover:bg-gray-700 transition"
                            >
                                My Journey <FiArrowRight className="ml-2" />
                            </button>
                        </div>

                    </div>


                </div>

            </div>
        </section>
    );
};

export default About;
