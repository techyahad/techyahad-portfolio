import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { GoArrowUpRight } from 'react-icons/go';
import DarkLogo from '../../../assets/logo/1.png';
import LightLogo from '../../../assets/logo/Trans.png';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);


    const handleResize = () => {
        setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    // Listen to window resize event
    React.useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="">
            <div className="container mx-auto px-4 py-6 flex md:bg-white bg-gray-900 justify-between items-center">
                {/* Logo */}
                <div className="flex-shrink-0 text-2xl font-bold cursor-pointer">
                    <Link to="/">
                        <img src={isMobile ? LightLogo : DarkLogo} className=" h-16 p-1" alt="" />
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-10">
                    <Link to="main" smooth={true} duration={500} className="text-gray-600 cursor-pointer text-xl hover:text-gray-700">
                        Intro
                    </Link>
                    <Link to="about" smooth={true} duration={500} className="text-gray-600 text-xl hover:text-gray-700 cursor-pointer">
                        About
                    </Link>
                    <Link to="projects" smooth={true} duration={500} className="text-gray-600 text-xl hover:text-gray-700 cursor-pointer">
                        Services
                    </Link>
                    <Link to="portfolio" smooth={true} duration={500} className="text-gray-600 text-xl hover:text-gray-700 cursor-pointer">
                        Portfolio
                    </Link>
                    <Link to="contact" smooth={true} duration={500} className="text-gray-600 text-xl hover:text-gray-700 cursor-pointer">
                        Contact
                    </Link>
                </div>

                {/* CTA Button */}
                <div className="hidden md:flex cursor-pointer">
                    <Link to="/contact" className="flex items-center justify-center text-gray-800  py-3 rounded-full hover:bg-gray-800  px-6 border-2  font-medium text-xl group relative">
                        <div className='flex items-center gap-1 justify-center group-hover:text-gray-300'>
                            <span className="">Let's Talk</span>
                            <GoArrowUpRight size={25} className="pt-1 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </div>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-200 hover:text-gray-600 focus:outline-none focus:text-gray-200">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-600">
                    <Link to="/" className="block px-4 py-2  text-gray-300 hover:bg-gray-500">
                        Intro
                    </Link>
                    <Link to="/about" className="block px-4 py-2  text-gray-300 hover:bg-gray-500">
                        About
                    </Link>
                    <Link to="/projects" className="block px-4 py-2 text-gray-300 hover:bg-gray-500">
                        Services
                    </Link>
                    <Link to="/technologies" className="block px-4 py-2  text-gray-300 hover:bg-gray-500">
                        Technologies
                    </Link>
                    <Link to="/contact" className="block px-4 py-2  text-gray-300 hover:bg-gray-500">
                        Contact
                    </Link>
                    <Link to="/contact" className="block px-4 py-2 text-gray-300   hover:bg-gray-500">
                        Let's Talk
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
