import Logo from "../../../assets/logo/Trans.png"
import { GoArrowUpRight } from "react-icons/go";
import { FaLinkedin, FaGithub, FaFacebook, FaBehance } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className=" font-serif pt-14 bg-gray-900  w-full">
            <div className=" container mx-auto  lg:mt-20 mt-2 lg:px-0 px-3 ">
                <div className=" flex items-center pb-6  justify-center">
                    <div className="text-center">
                        <h1 className="lg:text-6xl text-3xl   font-medium text-gray-300">
                            Have a Project in your mind?
                        </h1>
                        <p className=" lg:block hidden text-[20px]   leading-[32px]  text-gray-400 mt-4">
                            Let's Talk. I'm here to transform your ideas into reality. Let's work together to <br /> create something extraordinary!
                        </p>
                        <p className=" block lg:hidden text-md    text-gray-400 mt-4">
                            Let's Talk. I'm here to transform your ideas into reality.
                        </p>
                        <button className="  lg:py-3 py-1 mt-10 bg-gray-100 px-6  text-lg group relative">
                            <div className='flex items-center gap-1 justify-center text-gray-800'>
                                <span className="lg:block hidden">Get in touch now</span>
                                <span className="block lg:hidden">Contact Now</span>

                                <GoArrowUpRight size={25} className="pt-1 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                            </div>
                        </button>
                    </div>
                </div>
                <hr className=" border-gray-700 lg:hidden block" />

                <div className='py-6 flex justify-center lg:justify-between'>
                    <button className='lg:block hidden cursor-pointer'>
                        <div className='flex items-center gap-4'>
                            <img src={Logo} className='lg:w-16 w-12' alt="Techy Ahad Logo" />
                        </div>
                    </button>
                    <div className='flex '>
                        <div className='flex items-center justify-center gap-4  text-gray-200'>
                            <a href="https://www.linkedin.com/in/abdul-ahad-designer" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={25} />
                            </a>
                            <a href="https://github.com/techyahad" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={25} />
                            </a>
                            <a href="https://www.facebook.com/techy-ahad" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={25} />
                            </a>
                            <a href="https://www.behance.net/ahaddesigns" target="_blank" rel="noopener noreferrer">
                                <FaBehance size={25} />
                            </a>
                        </div>
                    </div>
                </div>
                <hr className=" border-gray-700" />

                <h1 className="text-center lg:block hidden  text-gray-500 py-4">© Copyright 2024 Techy Ahad | All rights reserved.</h1>
            </div>

        </footer>
    );
}

export default Footer;
