import Card from "./Card";

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
      <button className="lg:hidden flex w-full items-center justify-center group py-3 border bg-gray-800 hover:bg-gray-700 px-6 font-medium text-lg group relative md:mt-0 mt-8">
        <div className='flex items-center gap-1 justify-center group-hover:text-gray-300 text-gray-100'>
          <span className="">Show All</span>
        </div>
      </button>
    </div>
  );
};

export default Work;
