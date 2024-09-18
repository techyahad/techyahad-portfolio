import Card from "./Card";
import { FiArrowRight } from 'react-icons/fi'; // Import arrow icon

const Work = () => {
  return (
    <div className='container lg:px-0 px-3 my-12 md:my-32 mx-auto font-serif'>
      {/* Heading Section */}
      <div className='flex lg:items-center justify-between flex-col md:flex-row'>
        {/* Desktop Heading */}
        <h1 className='hidden lg:block text-5xl text-gray-800 font-medium'>
          Showcasing My <span className="text-gray-500">Latest Work. </span>
        </h1>

        {/* Mobile Heading */}
        <h1 className='block md:hidden text-4xl text-left text-gray-800 font-medium'>
          Highlighted Work.
        </h1>

        {/* Button - Visible on desktop and moved below on mobile */}

        <button className="flex items-center lg:block hidden justify-center group py-3 border border-gray-800 hover:bg-gray-800 px-6 font-medium text-lg group relative md:mt-0 mt-8">
          <div className='flex items-center gap-1 justify-center group-hover:text-gray-300 text-gray-800'>
            <span className="">Show All</span>
          </div>
        </button>
      </div>

      {/* Cards Section */}
      <div className="lg:my-16 my-8 grid grid-cols-1 sm:grid-cols-2 gap-12">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex items-center justify-center lg:hidden block">
        <button
          className="flex items-center px-6 py-2 bg-gray-800 text-white font-medium rounded hover:bg-gray-700 transition"

        >
          Checkout Portfolio <FiArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Work;
