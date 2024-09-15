import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { GoArrowUpRight } from 'react-icons/go';
import { MdOutlineClose } from "react-icons/md";
import DarkLogo from '../../../assets/logo/1.png';
import { LiaGripLinesSolid } from "react-icons/lia";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the mobile menu and prevent scrolling when the menu is open
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    };

    useEffect(() => {
        // Clean up when the component unmounts
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    return (
        <nav className="">
            <div className="container bg-white lg:bg-inherit mx-auto font-serif md:px-0 px-3 py-6 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex-shrink-0 text-2xl font-bold cursor-pointer">
                    <RouterLink to="/">
                        <img
                            src={DarkLogo}
                            className="h-12 md:h-16 p-1" // Reduced size on mobile
                            alt="Logo"
                        />
                    </RouterLink>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-10">
                    <RouterLink to="/home" className="relative text-gray-800 cursor-pointer text-xl hover:text-gray-600 group pb-1">Home</RouterLink>
                    <RouterLink to="portfolio" className="relative text-gray-800 cursor-pointer text-xl hover:text-gray-600 group pb-1">Work</RouterLink>
                    <RouterLink to="/services" className="relative text-gray-800 cursor-pointer text-xl hover:text-gray-600 group pb-1">Services</RouterLink>
                    <RouterLink to="/blogs" className="relative text-gray-800 cursor-pointer text-xl hover:text-gray-600 group pb-1">Insights</RouterLink>
                    <RouterLink to="/about" className="relative text-gray-800 cursor-pointer text-xl hover:text-gray-600 group pb-1">About</RouterLink>
                </div>

                {/* Desktop CTA Button */}
                <div className="hidden md:flex cursor-pointer">
                    <RouterLink to="contact" className="flex items-center justify-center py-3 bg-gray-800 px-6 font-medium text-xl group relative">
                        <div className='flex items-center gap-1 justify-center text-gray-300'>
                            <span className="">Let's Talk</span>
                            <GoArrowUpRight size={25} className="pt-1 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </div>
                    </RouterLink>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-600 focus:outline-none">
                        {isOpen ? (
                            <MdOutlineClose className="h-8 w-8" /> // Show close icon when menu is open
                        ) : (
                            <LiaGripLinesSolid className="h-8 w-8" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden font-serif pb-20  bg-gray-100 min-h-screen flex flex-col justify-center items-center text-center px-4">
                    <RouterLink to="main" className="block px-4 py-2 text-gray-800 text-3xl hover:bg-gray-200 w-full">Home </RouterLink>
                    <RouterLink to="/about" className="block px-4 py-2 text-gray-800 text-3xl hover:bg-gray-200 w-full">Work</RouterLink>
                    <RouterLink to="portfolio" className="block px-4 py-2 text-gray-800 text-3xl hover:bg-gray-200 w-full">Services</RouterLink>
                    <RouterLink to="/insights" className="block px-4 py-2 text-gray-800 text-3xl hover:bg-gray-200 w-full">Insights</RouterLink>
                    <RouterLink to="/blogs" className="block px-4 py-2 text-gray-800 text-3xl hover:bg-gray-200 w-full">About</RouterLink>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
