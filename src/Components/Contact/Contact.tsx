import { Link } from "react-router-dom"
import { GoArrowUpRight } from "react-icons/go";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import { FaLinkedin, FaFacebook, FaBehance, FaGithub } from 'react-icons/fa';

const Contact: React.FC = () => {


    return (
        <div className="w-full my-20 ">
            <div className="container mx-auto flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-6xl text-gray-800 font-semibold  mb-6">Let's Start <span className="text-gray-500"> Talk..</span></h1>
                    <p className="text-gray-600 text-lg max-w-4xl">Reach out to us and let's discuss how We're here to listen and help you acheive your goals.</p>
                    </div>
            </div>

            <div className="relative w-screen bg-white border rounded-3xl overflow-hidden flex mx-auto container my-20">

                {/* Left Section */}
                <div className="flex-1 bg-gray-800 border text-white p-16 flex flex-col justify-between">
                    <div>
                        <h1 className="text-4xl text-gray-300 mb-4 font-semibold">Get in touch</h1>
                        <p className=" text-gray-300">
                            I'd love to hear from you! Whether you have a question about features, pricing,<br /> need a demo,  or anything else, I'm ready to  answer all your questions.
                        </p>
                    </div>
                    <div className="text-gray-200 text-lg space-y-2  ">
                        <div className="flex items-center ">
                            <FaPhone className="rotate-90" />
                            <h1 className="pl-2">+923330700019</h1>
                        </div>
                        <div className="flex items-center ">
                            <FaMapMarkerAlt />
                            <h1 className="pl-2">Hyderabad, Sindh Pakistan </h1>
                        </div>
                        <div className="flex items-center ">
                            <FaEnvelope />
                            <h1 className="pl-2">abdulahadbaloxh@gmail.com</h1>
                        </div>




                    </div>
                    <div className="flex items-center space-x-4  ">
                        <FaLinkedin size={25} />
                        <FaBehance size={25} />
                        <FaGithub size={25} />
                        <FaFacebook size={25} />

                    </div>
                </div>

                {/* Right Section */}
                <div className="flex-1 bg-white p-16 flex flex-col border justify-center">
                    <form className="">
                        <div className="mb-10 flex space-x-4">
                            <div className="w-1/2">
                                <label className="block text-gray-500 text-sm font-semibold mb-2" htmlFor="first-name">
                                    First Name
                                </label>
                                <input
                                    className="appearance-none border-b-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
                                    id="first-name"
                                    type="text"
                                    placeholder="Alexa"
                                />
                            </div>
                            <div className="w-1/2">
                                <label className="block text-gray-500 text-sm font-semibold mb-2" htmlFor="last-name">
                                    Last Name
                                </label>
                                <input
                                    className="appearance-none border-b-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
                                    id="last-name"
                                    type="text"
                                    placeholder="Adam"
                                />
                            </div>
                        </div>
                        <div className="mb-10 flex space-x-4">
                            <div className="w-1/2">
                                <label className="block text-gray-500 text-sm font-semibold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="appearance-none border-b-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
                                    id="email"
                                    type="email"
                                    placeholder="alexa@gmail.com"
                                />
                            </div>
                            <div className="w-1/2">
                                <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="number">
                                    Phone No:
                                </label>
                                <input
                                    className="appearance-none border-b-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
                                    id="number"
                                    type="number"
                                    placeholder="123 4567890"
                                />
                            </div>
                        </div>

                        <div className="mb-10">
                            <label className="block text-gray-600 text-sm font-semibold mb-4">
                                Select Subject?
                            </label>
                            <div className="flex space-x-4">
                                <div>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="form-checkbox accent-gray-700  h-5 w-5 text-gray-600"
                                        />
                                        <span className="ml-2 text-gray-700">Web Development</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="form-checkbox accent-gray-700  h-5 w-5 text-gray-600"
                                        />
                                        <span className="ml-2 text-gray-700">Branding Designing</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="form-checkbox accent-gray-700  h-5 w-5 text-gray-600"
                                        />
                                        <span className="ml-2 text-gray-700">UI and UX</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="form-checkbox accent-gray-700 h-5 w-5 text-gray-600"
                                        />
                                        <span className="ml-2 text-gray-700">UX Experience</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mb-10">
                            <label className="block text-gray-500 text-sm font-semibold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="appearance-none outline-none border-b-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
                                id="message"
                                rows={4}
                                placeholder="Hey Ahad I'm interested in... "
                            ></textarea>
                        </div>
                        <div className="">
                            <div className="hidden md:flex cursor-pointer">
                                <Link to="/contact" className="flex items-center justify-center text-gray-800 bg-gray-800 py-3 rounded-full   px-6 border-2  font-medium text-xl group relative">
                                    <div className='flex items-center gap-1 justify-center text-gray-300'>
                                        <span className="">Send Message</span>
                                        <GoArrowUpRight size={25} className="pt-1 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;