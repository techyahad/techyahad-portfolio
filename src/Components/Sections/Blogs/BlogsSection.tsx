import React, { useState } from 'react';
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import image from "../../../assets/images/Screen 1.jpg";
import { FaLinkedin, FaFacebook, FaBehance } from 'react-icons/fa';


const BlogsSection: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const postsPerPage = 3;

    const blogs = [
        {
            heading: "Understanding React Hooks",
            description: "A comprehensive guide to understanding and using React hooks for state management and side effects.",
            date: "July 17, 2024",
            category: "UI/UX",
            readTime: "9 min to read",
            blogImage: image,
        },
        {
            heading: "Latest Design Trends",
            description: "Explore the latest design trends that are shaping the industry.",
            date: "July 18, 2024",
            category: "Design Trend",
            readTime: "5 min to read",
            blogImage: image,
        },
        {
            heading: "Top Tech Stacks for 2024",
            description: "An overview of the most popular tech stacks used in 2024.",
            date: "July 19, 2024",
            category: "Tech Stacks",
            readTime: "7 min to read",
            blogImage: image,
        },
        {
            heading: "Advanced Development Techniques",
            description: "Learn about advanced development techniques to enhance your skills.",
            date: "July 20, 2024",
            category: "Development",
            readTime: "8 min to read",
            blogImage: image,
        }
    ];

    const filteredBlogs = selectedCategory === 'All' ? blogs : blogs.filter(blog => blog.category === selectedCategory);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredBlogs.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className='w-full h-auto font-serif'>
            <hr className='container mx-auto' />
            <header className="flex flex-col items-center py-20 justify-center text-center ">
                <h1 className="text-4xl md:text-6xl font-medium text-gray-800 mb-6">
                    A collection of <span className='text-gray-500'>my insights..</span>
                </h1>
                <p className="text-gray-600 text-md max-w-4xl">
                    Subscribe to my newsletter to learn more about design, our blog and other things we like to share.
                </p>
            </header>
            <hr className='container mx-auto' />
            <div className='container min-h-screen mx-auto my-24 flex justify-between'>

                <nav className='w-1/3 space-y-16 '>
                    <div>
                        <h1 className='text-4xl font-medium'>Categories</h1>
                        <div className='text-xl display-block space-y-2 mt-6'>
                            {['All', 'Design Trend', 'Tech Stacks', 'UI / UX', 'Development'].map(category => (
                                <div key={category} className='cursor-pointer'>
                                    <button
                                        className={`hover:text-gray-400 ${selectedCategory === category ? 'text-gray-400' : ''}`}
                                        onClick={() => {
                                            setSelectedCategory(category);
                                            setCurrentPage(1); // Reset to first page when category changes
                                        }}
                                    >
                                        {category}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-2/3">
                        <input
                            className="appearance-none border-b border-gray-500 w-full py-2 px-2 text-gray-700 text-lg leading-tight focus:outline-none"
                            id="firstName"
                            name="first_name"
                            type="text"
                            placeholder="Search"
                        />
                    </div>
                    <div className="w-2/3">
                        <h1>Follow me here: </h1>
                        <div className="flex items-center text-gray-800 space-x-4 mt-6">
                            <a href="https://www.linkedin.com/in/abdul-ahad-designer" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={30} />
                            </a>
                            <a href="https://www.facebook.com/techy-ahad" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={30} />
                            </a>
                            <a href="https://www.behance.net/ahaddesigns" target="_blank" rel="noopener noreferrer">
                                <FaBehance size={30} />
                            </a>
                        </div>
                    </div>
                </nav>

                <div className='w-full space-y-6'>
                    {currentPosts.length > 0 ? (
                        currentPosts.map((blog, index) => (
                            <React.Fragment key={index}>
                                <BlogCard
                                    heading={blog.heading}
                                    description={blog.description}
                                    date={blog.date}
                                    category={blog.category}
                                    readTime={blog.readTime}
                                    blogImage={blog.blogImage}
                                />
                                {index < currentPosts.length - 1 && <hr className='mx-auto container' />}
                            </React.Fragment>
                        ))
                    ) : (
                        <div className='text-center text-gray-500 text-xl py-20'>
                            No articles found in the "{selectedCategory}" category. Check back later for updates or explore other categories!
                        </div>
                    )}
                </div>
            </div>
            {filteredBlogs.length > 0 && (
                <div className='flex justify-center mt-8'>
                    <Pagination
                        totalPosts={filteredBlogs.length}
                        postsPerPage={postsPerPage}
                        currentPage={currentPage}
                        paginate={paginate}
                    />
                </div>
            )}
        </div>
    );
}

export default BlogsSection;
