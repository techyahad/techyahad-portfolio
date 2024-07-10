import React from 'react';
import { Link } from 'react-router-dom';
import { GoArrowUpRight } from "react-icons/go";
import image3 from "../../assets/images/Mockuo.jpg";
import Screen1 from "../../assets/images/Screen 1.jpg"
import Screen2 from "../../assets/images/Screen 1.jpg"



const Main: React.FC = () => {
    return (
        <div className='container mx-auto font-serif h-auto flex flex-col justify-between'>
            <div className="flex items-center justify-center flex-1 py-40">
                <div className="text-center px-4 md:px-48">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-medium text-gray-800 mb-12">
                        <span className='text-gray-400'>I'm Ahad,</span> who loves perfect design & unique user experiences <span className='text-4xl'>■</span>
                    </h1>
                    <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
                        <Link to="/contact" className="flex items-center justify-center text-gray-300 bg-gray-800 py-3 px-6 rounded-full text-xl group relative">
                            <span>Let's Talk</span>
                            <GoArrowUpRight size={25} className="ml-2 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </Link>
                        <Link to="/contact" className="text-gray-800 font-medium text-xl hover:text-gray-500">
                            Explore More
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto flex gap-4 ">
                <img src={Screen1} alt="Graphic or profile" className="w-1/3 object-cover rounded-3xl" style={{ height: 'calc(100vh / 1.5)' }} />
                <img src={image3} alt="Graphic or profile" className="w-2/3  object-cover rounded-3xl" style={{ height: 'calc(100vh / 1.5)' }} />
            </div>
        </div>
    );
};

export default Main;
