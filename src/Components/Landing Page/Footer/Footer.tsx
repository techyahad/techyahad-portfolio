import React from 'react';
import Logo from "../../../assets/logo/Trans.png"
import { GoArrowUpRight } from "react-icons/go";
import { FaLinkedin, FaGithub, FaFacebook, FaBehance } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className=" bg-gray-900 w-full ">
            <div className='container mx-auto'>
                <div className='flex justify-between py-16'>
                    <h1 className='text-3xl text-gray-200 font-medium'>Stay connected w/me.</h1>
                    <div className='relative '>
                        <input className='bg-gray-900 border-b-2 pb-3 outline-none w-80 text-gray-300 text-lg' placeholder='Enter your email' />
                        <button>
                            <GoArrowUpRight color='white' size={25} className='absolute right-0 top-2 ' />
                        </button>
                    </div>

                </div>
                <hr className=' border-1 border-gray-600 ' />

                <div className='py-16 '>
                    <div className='flex items-center gap-4 mb-4  '>
                        <img src={Logo} className='w-16' alt="" />
                        <h1 className='text-4xl font-medium text-gray-300'>Techy Ahad</h1>
                    </div>
                    <div className='flex justify-between'><h1 className='text-medium text-gray-400 w-full'>A Developer & Designer Who loves the technology and passionate <br /> about exploring modern tech stacks...</h1>
                        <div className='flex items-center justify-center gap-6 text-gray-400 '>
                            <a href=""><FaLinkedin size={25} /></a>
                            <a href=""><FaGithub size={25} /></a>
                            <a href=""> <FaFacebook size={25} /></a>
                            <a href="">   <FaBehance size={25} /></a>
                        </div>

                    </div>

                </div>
                <hr className=' border-1 border-gray-600 ' />
                <div className=' text-gray-500 py-8 flex justify-between  '>
                    <p className='mb-4'>©2024 All Rights Reserved by Techy Ahad</p>
                    <div className='space-x-6 mb-4 text-gray-300'>
                        <a href="">Terms of Service</a>
                        <a href="">Privacy and policy</a>

                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
