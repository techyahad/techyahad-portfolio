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
        description: 'Constructs websites using HTML, CSS, JavaScript, and other technologies to create functional and interactive online platforms',
        link: '#',
        icon: ico1
    },
    {
        title: 'User Interface Design',
        description: 'Designs the look and feel of websites with graphical elements like icons and buttons, ensuring an intuitive and visually pleasing user experience.',
        link: '#',
        icon: ico4 // Replace with actual icons if available
    },
    {
        title: 'User Experience Research',
        description: 'Improves overall user satisfaction by optimizing website usability, accessibility, and interaction flow based on user research and feedback.',
        link: '#',
        icon: ico3 // Replace with actual icons if available
    },
    {
        title: 'Front End Development',
        description: 'Crafts the user-facing part of websites, focusing on designing responsive layouts, intuitive navigation, and engaging user interfaces.',
        link: '#',
        icon: ico2  // Replace with actual icons if available
    },
    {
        title: 'Product Prototyping',
        description: 'Creates early-stage models or mockups of websites or apps to visualize and test functionality, gathering insights and refining designs before final development',
        link: '#',
        icon: ico3  // Replace with actual icons if available
    },
    {
        title: 'Branding Design',
        description: ' Shapes a brands visual identity through logos, color schemes, typography, and overall aesthetics to establish a memorable and cohesive image.',
        link: '#',
        icon: ico2  // Replace with actual icons if available
    }
];

const Project: React.FC = () => {
    return (
        <div className="container mx-auto h-auto flex flex-col items-center my-12 md:my-24 md:p-0 p-6 ">
            <header className="w-full flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl md:text-6xl font-semibold text-gray-800 mb-6">
                    Explore <span className='text-gray-500'>My Offerings</span>  for You<span className="text-2xl pl-2">■</span>
                </h1>
                <p className="text-gray-600 text-lg max-w-4xl">
                    Explore the range of services I provide to meet your needs, from consultations to custom solutions, designed to deliver exceptional results and support your goals.
                </p>
            </header>



            <main className="flex-grow container mx-auto mt-12  ">
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

        </div>
    );
};

export default Project;
