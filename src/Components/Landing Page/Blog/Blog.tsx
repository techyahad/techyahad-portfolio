import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom"
// Dummy data for cards
const blogData = [
    {
        id: 1,
        title: 'UI Latest Trends 2024',
        description: 'AI will change the whole game in the designing era?',
        imgSrc: 'https://plus.unsplash.com/premium_photo-1661339265887-be15949790ff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 2,
        title: 'Mastering Front-End Development',
        description: 'Why learning front-end development is essential in 2024',
        imgSrc: 'https://plus.unsplash.com/photo-1581276879432-15a76f1f2d0d?q=80&w=2069&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'Responsive Web Design Best Practices',
        description: 'The key principles for making your site mobile-friendly',
        imgSrc: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2069&auto=format&fit=crop'
    },
    {
        id: 4,
        title: 'Exploring UX Research Techniques',
        description: 'Understand user behavior to design better products',
        imgSrc: 'https://plus.unsplash.com/photo-1573497019430-634a8b37d6ab?q=80&w=2069&auto=format&fit=crop'
    }
];

const Blog: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();

    const navigateToBlog = () => {
        navigate('/blogs');
    };

    // Function to check screen width
    const checkScreenSize = () => {
        setIsMobile(window.innerWidth < 1024); // Setting for mobile if screen is less than 1024px wide
    };

    useEffect(() => {
        // Check screen size on initial render
        checkScreenSize();

        // Add event listener to handle window resizing
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    return (
        <div className="container font-serif mx-auto lg:px-0 px-3  lg:py-10 lg:pb-0 pb-10 lg:my-12 my-2">
            <header className=" flex justify-between items-center">
                    <h1 className="lg:text-5xl text-4xl font-medium text-gray-800 lg:mb-4 mb-0">
                        Latest Insights.
                    </h1>
                <div className='lg:block hidden'>
                    <button className="flex items-center justify-center group py-3 border border-gray-800 hover:bg-gray-800 px-6 font-medium text-lg group relative">
                        <div className='flex items-center gap-1 justify-center group-hover:text-gray-300 text-gray-800'>
                            <span className="">View All</span>
                        </div>
                    </button>
                </div>
            </header>

            {/* Render only 1 card on mobile and all cards on desktop */}
            <div className='w-full gap-8 lg:mt-12 mt-4 grid grid-cols-1 lg:grid-cols-4 cursor-pointer' onClick={navigateToBlog}>
                {isMobile
                    ? <Card
                        key={blogData[0].id}
                        title={blogData[0].title}
                        description={blogData[0].description}
                        imgSrc={blogData[0].imgSrc}
                    />
                    : blogData.map((blog) => (
                        <Card
                            key={blog.id}
                            title={blog.title}
                            description={blog.description}
                            imgSrc={blog.imgSrc}
                        />
                    ))}

            </div>
          

        </div>
    );
};

export default Blog;
