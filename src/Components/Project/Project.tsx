import React from 'react';
import ProjectCard from './Card';
import { Link } from "react-router-dom"
import { GoArrowUpRight } from "react-icons/go";
import ico1 from "../../assets/ico/1.png"
import ico2 from "../../assets/ico/2.png"
import ico3 from "../../assets/ico/3.png"
import ico4 from "../../assets/ico/4.png"


const projects = [
    {
        title: 'Web Development',
        description: 'I build responsive and dynamic websites that bring your ideas to life... ',
        link: '#',
        icon: ico1
    },
    {
        title: 'User Interface Design',
        description: 'I create visually appealing and user-friendly interfaces for websites & mobile apps.. ',
        link: '#',
        icon: ico4 // Replace with actual icons if available
    },
    {
        title: 'User Experience Research',
        description: ' I help enhance the way users interact with your product or website... ',
        link: '#',
        icon: ico3 // Replace with actual icons if available
    },
    {
        title: 'Front End Development',
        description: 'I specialize in creating visually stunning and highly interactive websites',
        link: '#',
        icon: ico2  // Replace with actual icons if available
    },
    {
        title: 'Product Prototyping',
        description: ' I specialize in creating functional prototypes that bring concepts to life',
        link: '#',
        icon: ico3  // Replace with actual icons if available
    },
    {
        title: 'Branding Design',
        description: 'I specialize in creating logos, color schemes, and typography that embody your brand essence..',
        link: '#',
        icon: ico2  // Replace with actual icons if available
    }
];

const Project: React.FC = () => {
    return (
        <div className="container mx-auto h-auto flex flex-col items-center my-12 md:my-32 md:p-0 p-6 ">


            <header className="w-full flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl md:text-6xl font-semibold text-gray-800 mb-6">
                    Explore <span className='text-gray-500'>My Offerings</span>  for You..
                </h1>
                <p className="text-gray-600 text-lg max-w-4xl">
                    Explore the range of services I provide to meet your needs, from consultations to custom solutions, designed to deliver exceptional results and support your goals.
                </p>
            </header>


            <main className="flex-grow container mx-auto my-12   ">
                <div className="grid grid-cols-1 md:grid-cols-3  gap-6 ">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            icon={project.icon}
                        />
                    ))}
                </div>
            </main>

            <div className='w-full h-auto mt-12 flex items-center justify-between '>
                <div className='w-1/3'>
                    <h1 className='text-6xl font-semibold text-gray-800 '> <span className='text-gray-400'>Experiences</span> with Passion, Precision, and Purpose..</h1>
                </div>
                <div className='max-w-xl'>

                    <p className='text-2xl font-normal text-gray-600 '>We deliver exceptional experiences fueled by passion and precision. Our work is crafted with care and purpose, ensuring every detail is thoughtfully designed.</p>
                    <div className="hidden md:flex cursor-pointer mt-6">
                        <Link to="/contact" className="flex items-center justify-center text-gray-200  py-3 rounded-full bg-gray-800  px-6 border-2  font-medium text-xl group relative">
                            <div className='flex items-center gap-1 justify-center group-hover:text-gray-300'>
                                <span className="">Let's Talk</span>
                                <GoArrowUpRight size={25} className="pt-1 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Project;
