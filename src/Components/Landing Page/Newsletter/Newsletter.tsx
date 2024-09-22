import { GoArrowUpRight } from "react-icons/go";

const Newsletter = () => {
    return (
        <div className=" mx-auto h-[440px] font-serif flex items-center mt-20 justify-center  bg-gray-900 ">
            <div className="text-center">
                <h1 className="text-[59.8px] leading-[72px]  font-medium text-gray-300">
                    Have a Project in your mind?
                </h1>
                <p className="text-[20px]  leading-[32px]  text-gray-400 mt-4">
                    Let's Talk. I'm here to transform your ideas into reality. Let's work together to <br /> create something extraordinary!
                </p>
                <button className="  py-3 mt-10 bg-gray-100 px-6  text-lg group relative">
                    <div className='flex items-center gap-1 justify-center text-gray-800'>
                        <span className="">Get in touch now</span>
                        <GoArrowUpRight size={25} className="pt-1 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                </button>
            </div>
        </div>

    )
}

export default Newsletter