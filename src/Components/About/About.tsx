import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom"
import image from "../../assets/images/1.jpg"



const About: React.FC = () => {
    return (
        <section className=" md:my-32 my-12   relative bg-cover bg-center h-auto flex items-center" >
            <div className='container mx-auto md:p-0 p-6 '>
                <div className=" flex flex-col md:flex-row items-center justify-between">
                    {/* Left Section */}
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <div className="group">
                            <h1 className="text-4xl md:text-6xl font-semibold text-gray-800 mb-6">
                                About<span className='text-3xl pl-2'>■</span>
                            </h1>
                        </div>
                        <p className="text-lg md:text-xl text-gray-500 md:mb-10 mb-4 pr-12">
                            I'm a passionate UI/UX designer and front-end developer based in Sindh, Pakistan. Currently, I'm an undergraduate computer science student, balancing my academic pursuits with my love for technology and modern tech stacks. I specialize in creating visually appealing and highly functional web applications using React.js and TypeScript.
                        </p>

                        <div className="md:flex items-center  ">
                            <Link to="/contact" className="relative group flex items-center">
                                <div className="relative flex items-center">
                                    <span className="text-gray-800 font-medium text-xl group-hover:text-gray-600">My Journey</span>
                                    <GoArrowUpRight size={25} className="mt-1 ml-2 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-transparent transition-all duration-300 group-hover:bg-gray-600"></div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full md:w-1/3 mb-4 flex ">
                        {/* Dark gray background div */}

                        {/* Image with responsive adjustments */}
                        <img
                            src={image}
                            alt="Description"
                            className="relative z-10 w-full h-auto md:w-auto md:h-full"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
