import React from 'react';

const BlogCard = ({ heading, description, date, category, readTime, blogImage }) => {
    return (
        <div className="overflow-hidden w-full cursor-pointer flex  space-x-6">
            <div className="flex-1 ">
                <h2 className="text-3xl font-medium mb-4 text-gray-800 hover:text-gray-600">{heading}</h2>
                <p className="text-gray-600 text-lg pr-10 mb-8">{description}</p>
                <div className="flex items-center space-x-4 text-gray-500 text-sm">
                    <div className="flex items-center space-x-2">
                        <span>{date}</span>
                        <span className="mx-1">•</span>
                        <span className="bg-gray-200 text-gray-700 py-1 px-2 rounded-full">
                            {category}
                        </span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m9-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{readTime}</span>
                    </div>
                </div>
            </div>
            <div className="w-1/4 ">
                <img className="rounded-xl object-cover h-[200px]  w-full" src={blogImage} alt="Blog" />
            </div>
        </div>
    );
};

export default BlogCard;
