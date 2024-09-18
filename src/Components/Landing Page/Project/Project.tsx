import React, { useState } from 'react';
import ProjectCard from './Card';
import { FiArrowDown } from 'react-icons/fi'; // Import arrow icon
import ico1 from "../../../assets/ico/1.png";
import ico2 from "../../../assets/ico/2.png";
import ico3 from "../../../assets/ico/3.png";
import ico4 from "../../../assets/ico/4.png";
import ico5 from "../../../assets/ico/5.png";
import ico6 from "../../../assets/ico/6.png";

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
        icon: ico4
    },
    {
        title: 'User Experience Research',
        description: 'I help enhance the way users interact with your product or website... ',
        link: '#',
        icon: ico6
    },
    {
        title: 'Front End Development',
        description: 'I specialize in creating visually stunning and highly interactive websites',
        link: '#',
        icon: ico2
    },
    {
        title: 'Product Prototyping',
        description: 'I specialize in creating functional prototypes that bring concepts to life',
        link: '#',
        icon: ico5
    },
    {
        title: 'Branding Design',
        description: 'I specialize in creating logos, color schemes, and typography that embody your brand essence..',
        link: '#',
        icon: ico3
    }
];

const Project: React.FC = () => {
    const [showAll, setShowAll] = useState(false); // State to toggle show all cards

    // Show 3 cards on mobile, 6 on desktop
    const displayedProjects = showAll || window.innerWidth >= 768 ? projects : projects.slice(0, 3);

    return (
        <div className="container font-serif mx-auto h-auto flex flex-col my-12 md:my-32 lg:p-0 px-3">
            {/* Mobile heading */}
            <h1 className='block md:hidden text-4xl text-left text-gray-800 font-medium'>
                My Services.
            </h1>

            <header className="w-full flex flex-col items-center justify-center text-center">
                <h1 className="hidden lg:block text-4xl md:text-6xl font-medium text-gray-800 mb-0 lg:mb-6">
                    Explore <span className='text-gray-500'>My Offerings</span> for You.
                </h1>

                <p className="hidden lg:block text-gray-600 text-lg lg:max-w-4xl">
                    Explore the range of services I provide to meet your needs, from consultations to custom solutions, designed to deliver exceptional results and support your goals.
                </p>
            </header>

            <main className="flex-grow container mx-auto my-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {displayedProjects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            icon={project.icon}
                        />
                    ))}
                </div>

                {/* Show "View All" button only on mobile (md:hidden) */}
                {!showAll && window.innerWidth < 768 && (
                    <div className="flex justify-center mt-8 md:hidden">
                        <button
                            className="flex items-center px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
                            onClick={() => setShowAll(true)}
                        >
                            View All <FiArrowDown className="ml-2" />
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Project;
