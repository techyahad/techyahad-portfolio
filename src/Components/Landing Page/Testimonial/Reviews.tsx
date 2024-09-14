import React, { useState } from 'react';
import Slider from 'react-slick';
import Card from './Card';
import './sliderStyles.css';

const reviewsData = [
  { id: 1, name: 'Brooklyn', date: '02/04/2020', reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, name: 'Jordan', date: '05/12/2020', reviewText: 'Amazing work! Highly recommended.' },
  { id: 3, name: 'Ashlsey', date: '03/07/2021', reviewText: 'Very professional and skilled.' },
  { id: 4, name: 'Taylor', date: '12/11/2021', reviewText: 'Great communication and fast delivery.' },
  { id: 5, name: 'Chris', date: '20/01/2022', reviewText: 'Excellent service, will hire again.' },
  { id: 6, name: 'Blaske', date: '28/05/2022', reviewText: 'Highly talented and creative individual.' },
  { id: 7, name: 'Sam', date: '18/08/2022', reviewText: 'Delivered beyond expectations!' },
  { id: 8, name: 'Alex', date: '11/09/2022', reviewText: 'Very satisfied with the quality of work.' },
];

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 4;

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviewsData.slice(indexOfFirstReview, indexOfLastReview);

  const totalPages = Math.ceil(reviewsData.length / reviewsPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const sliderSettings = {
    dots: true, // Dots are hidden on mobile via CSS
    infinite: true,
    speed: 500,
    slidesToShow: 1.1, // Show 1 full card + part of the next one in mobile
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // Mobile view settings
        settings: {
          dots: false,
          slidesToShow: 1.1, // Adjust to show a portion of the next card
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='container mx-auto h-auto font-serif lg:my-24 my-12 lg:px-0 px-3'>
      <header className="w-full flex flex-col lg:items-center justify-center text-center">
        <h1 className="lg:block hidden text-4xl md:text-6xl font-medium text-gray-800 mb-6">
          What My <span className='text-gray-500'> Clients </span> Say About Me.
        </h1>
        <h1 className="lg:hidden text-left block text-4xl md:text-6xl font-medium text-gray-800">
          Satisfied Clients.
        </h1>
        <p className="hidden lg:block text-gray-600 text-lg max-w-4xl">
          Their feedback and testimonials speak to the quality of my work and the care I bring to every project.
        </p>
      </header>

      {/* Grid for Desktop */}
      <div className='hidden lg:grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-10 lg:pt-20'>
        {currentReviews.map(review => (
          <div className=" " key={review.id}> {/* Adds padding around each card */}
            <Card name={review.name} date={review.date} reviewText={review.reviewText} />
          </div>
        ))}
      </div>

      {/* Slider for Mobile */}
      <div className="lg:hidden pt-10 ">
        <Slider {...sliderSettings}>
          {reviewsData.map((review) => (
            <div className="px-4" key={review.id}> {/* Adds padding between slider items */}
              <Card name={review.name} date={review.date} reviewText={review.reviewText} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Pagination Dots for Desktop */}
      <div className="hidden lg:flex justify-center mt-10 space-x-4">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            onClick={() => handlePageClick(index + 1)}
            className={`cursor-pointer w-3 h-3 rounded-full ${currentPage === index + 1 ? 'bg-gray-800' : 'bg-gray-300'}`}
          ></span>
        ))}
      </div>
    </div >
  );
};

export default Reviews;
