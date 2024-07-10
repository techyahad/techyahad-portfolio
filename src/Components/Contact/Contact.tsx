import { Link } from "react-router-dom"
import { GoArrowUpRight } from "react-icons/go";
const Contact: React.FC = () => {


    return (

        <div className="container mx-auto flex md:items-center md:my-24 my-12 md:p-0 p-6">
            <div className="pr-6 w-1/2">
                <div className=" flex flex-col md:flex-row items-center justify-between ">
                    {/* Left Section */}
                    <div className="w-full md:w-1/2 mb-8 md:mb-0 ">
                        <div className="group">
                            <h1 className="text-4xl md:text-6xl font-semibold text-gray-700 mb-6">
                                Contact<span className='text-3xl pl-2'>■</span>
                            </h1>
                        </div>
                    </div>
                </div>
                <p className="mt-3 mb-12 text-lg text-gray-600 ">
                    Have a project in mind or just want to chat? Feel free to reach out using the contact form below
                </p>
                <ul className="mb-6 md:mb-0">
                    <li className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" className="h-6 w-6 text-gray-800">
                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                            <path
                                d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                            </path>
                        </svg>
                        <div className="ml-4 mb-4">
                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-600 ">Our Address
                            </h3>
                            <p className="text-gray-600 dark:text-slate-400">Hala Naka Kali Mori </p>
                            <p className="text-gray-600 dark:text-slate-400">Sindh, Pakistan</p>
                        </div>
                    </li>
                    <li className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" className="h-6 w-6 text-gray-800">
                            <path
                                d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                            </path>
                            <path d="M15 7a2 2 0 0 1 2 2"></path>
                            <path d="M15 3a6 6 0 0 1 6 6"></path>
                        </svg>
                        <div className="ml-4 mb-4">
                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-800 ">Contact
                            </h3>
                            <p className="text-gray-600 dark:text-slate-400">Mobile: +923330700019</p>
                            <p className="text-gray-600 dark:text-slate-400">Mail: abdulahadbaloxh@gmail.com</p>
                        </div>
                    </li>

                </ul>
            </div>
            <form id="contactForm" className="w-1/2">
                <div className="mb-6">

                    <div className="mx-0 mb-1 sm:mb-4">
                        <div className="mx-0 mb-1 sm:mb-4">
                            <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" placeholder="Your name" className="mb-2 w-full  border border-gray-800 py-2 pl-2 pr-4  sm:mb-0" name="name " />
                        </div>
                        <div className="mx-0 mb-1 sm:mb-4">
                            <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" placeholder="Your email address" className="mb-2 w-full  border border-gray-800 py-2 pl-2 pr-4 sm:mb-0" name="email" />
                        </div>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                        <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" placeholder="Write your message..." className="mb-2 w-full h-48  border border-gray-800 py-2 pl-2 pr-4  sm:mb-0"></textarea>
                    </div>
                </div>
                <div className="hidden md:flex">
                    <Link to="/contact" className="flex text-gray-800 items-center justify-center  font-medium text-xl group relative">
                        <span className="group-hover:text-gray-600">Get in Touch</span>
                        <GoArrowUpRight size={25} className="mt-1 ml-2 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        <div className="absolute inset-x-0 bottom-0  h-0.5 bg-transparent transition-all duration-300 group-hover:bg-gray-600"></div>
                    </Link>
                </div>
            </form>
        </div>

    );
};

export default Contact;