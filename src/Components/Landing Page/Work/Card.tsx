import image from "../../../assets/Portfolio/First Image.jpg";

const Card = () => {
    return (
        <div className="h-auto  border bg-white lg:bg-gray-100 overflow-hidden cursor-pointer">
            {/* Portfolio Image */}
            <div className="w-full lg:h-[399px] h-[300px] ">
                <img src={image} alt="Portfolio Image" className="w-full h-full object-cover" />
            </div>

            {/* Content Section */}
            <div className="lg:p-6 p-3 ">
                {/* Heading */}
                <h2 className="lg:text-3xl text-2xl font-medium text-gray-800">Universal kit For Web Developers</h2>


                {/* Description */}
                <p className="mt-2 lg:text-lg text-md text-gray-600">
                    The most universal kit for figma designers
                </p>

                {/* Hashtags */}
                <div className="flex lg:space-x-3 space-x-1 my-4 ">
                    <span className="border bg-gray-200 text-gray-800 py-1 px-3 text-sm">
                        figma
                    </span>
                    <span className="border bg-gray-200 text-gray-800 py-1 px-3 text-sm">
                        landing page
                    </span>
                    <span className="border bg-gray-200 text-gray-800 py-1 px-3 text-sm">
                        UI Kit
                    </span>
                    <span className="border bg-gray-200 text-gray-800 py-1 px-3 text-sm">
                        Design System
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Card;
