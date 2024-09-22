import React from 'react';

interface PaginationProps {
    totalPosts: number;
    postsPerPage: number;
    currentPage: number;
    paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPosts, postsPerPage, currentPage, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav aria-label="Page navigation ">
            <ul className="inline-flex items-center mb-20 -space-x-px">
                {pageNumbers.map(number => (
                    <li key={number}>
                        <button
                            onClick={() => paginate(number)}
                            className={`px-3 py-2 ml-0 leading-tight rounded ${currentPage === number ? 'text-gray-600 border border-gray-300' : 'text-gray-500 border border-gray-300'} bg-white hover:bg-gray-100 hover:text-gray-700`}
                            aria-current={currentPage === number ? "page" : undefined}
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
