import { GoArrowUpRight } from "react-icons/go";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import { FaLinkedin, FaFacebook, FaBehance, FaGithub } from 'react-icons/fa';
import { useState } from "react";
import { FiArrowRight } from 'react-icons/fi'; // Import arrow icon

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, subject: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });

        window.location.reload();
        console.log('Form Data:', formData);

        // Replace the above line with the API call to send formData to the server
    };

    return (
        <div className="w-full font-serif lg:my-20 my-10 px-3 ">
            <header className="w-full flex flex-col lg:items-center justify-center text-center">
                <h1 className="lg:block hidden text-4xl md:text-6xl font-medium text-gray-800 mb-6">
                    <span className='text-gray-500'> Let’s Talk  </span> About Your Next Project!
                </h1>
                <h1 className="lg:hidden text-left block text-4xl md:text-6xl font-medium text-gray-800">
                    Let's Talk.
                </h1>
                <p className="hidden lg:block text-gray-600 text-lg max-w-4xl">
                    Share your ideas with me, and let’s make your next project a success together!

                </p>
            </header>
            <div className="relative w-full bg-white border overflow-hidden flex flex-col md:flex-row mx-auto container lg:my-20 my-10">

                {/* Left Section */}
                <div className="flex-1  bg-gray-900 text-white p-8 md:p-16 lg:flex hidden flex-col justify-between">
                    <div>
                        <h1 className="text-3xl md:text-4xl text-gray-300 mb-4 font-medium">Get in touch</h1>
                        <p className="text-gray-400">
                            I'd love to hear from you! Whether you have a question about features, pricing,<br /> need a demo, or anything else, I'm ready to answer all your questions.
                        </p>
                    </div>
                    <div className="text-gray-400 text-lg space-y-2 mt-6">
                        <div className="flex items-center">
                            <FaPhone className="rotate-90" />
                            <h1 className="pl-2">+923330700019</h1>
                        </div>
                        <div className="flex items-center">
                            <FaMapMarkerAlt />
                            <h1 className="pl-2">Hyderabad, Sindh Pakistan</h1>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope />
                            <h1 className="pl-2">abdulahadbaloxh@gmail.com</h1>
                        </div>
                    </div>
                    <div className="flex items-center text-gray-400 space-x-4 mt-6">
                        <a href="https://www.linkedin.com/in/abdul-ahad-designer" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={25} />
                        </a>
                        <a href="https://github.com/techyahad" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={25} />
                        </a>
                        <a href="https://www.facebook.com/techy-ahad" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={25} />
                        </a>
                        <a href="https://www.behance.net/ahaddesigns" target="_blank" rel="noopener noreferrer">
                            <FaBehance size={25} />
                        </a>
                    </div>
                </div>

                <div className="flex-1 bg-white p-8 md:p-16 flex flex-col justify-center">
                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="mb-6 md:mb-10 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4">
                            <div className="w-full">
                                <label className="block text-gray-500 text-sm font-medium mb-2" htmlFor="firstName">
                                    First Name
                                </label>
                                <input
                                    className="appearance-none border-b-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                    id="firstName"
                                    type="text"
                                    placeholder="Alexa"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <label className="block text-gray-500 text-sm font-medium mb-2" htmlFor="lastName">
                                    Last Name
                                </label>
                                <input
                                    className="appearance-none border-b-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                    id="lastName"
                                    type="text"
                                    placeholder="Adam"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-6 md:mb-10 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4">
                            <div className="w-full">
                                <label className="block text-gray-500 text-sm font-medium mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="appearance-none border-b-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                    id="email"
                                    type="email"
                                    placeholder="alexa@gmail.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="phone">
                                    Phone No:
                                </label>
                                <input
                                    className="appearance-none border-b-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                    id="phone"
                                    type="text"
                                    placeholder="123 4567890"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-6 md:mb-10">
                            <label className="block text-gray-600 text-sm font-medium mb-4">
                                Select Subject?
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-checkbox accent-gray-700 h-5 w-5 text-gray-600"
                                        value="Web Development"
                                        checked={formData.subject === "Web Development"}
                                        onChange={handleRadioChange}
                                        required
                                    />
                                    <span className="ml-2 text-gray-700">Web Development</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-checkbox accent-gray-700 h-5 w-5 text-gray-600"
                                        value="Branding Designing"
                                        checked={formData.subject === "Branding Designing"}
                                        onChange={handleRadioChange}
                                        required
                                    />
                                    <span className="ml-2 text-gray-700">Branding Designing</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-checkbox accent-gray-700 h-5 w-5 text-gray-600"
                                        value="UI and UX"
                                        checked={formData.subject === "UI and UX"}
                                        onChange={handleRadioChange}
                                        required
                                    />
                                    <span className="ml-2 text-gray-700">UI and UX</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-checkbox accent-gray-700 h-5 w-5 text-gray-600"
                                        value="UX Experience"
                                        checked={formData.subject === "UX Experience"}
                                        onChange={handleRadioChange}
                                        required
                                    />
                                    <span className="ml-2 text-gray-700">UX Experience</span>
                                </label>
                            </div>
                        </div>
                        <div className="mb-6 md:mb-10">
                            <label className="block text-gray-500 text-sm font-medium mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="appearance-none outline-none border-b-2 border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                id="message"
                                rows={4}
                                placeholder="Hey Ahad I'm interested in..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div className="lg:block hidden  text-left">
                            <button  className="flex items-center justify-center bg-gray-800 text-gray-100 lg:text-gray-100 py-3 lg:over:bg-gray-800 px-4 w-48 border-2 font-normal text-xl group relative">
                                <div className='flex items-center gap-1 justify-center group-hover:text-gray-300'>
                                    <span className="">Submit now</span>
                                    <GoArrowUpRight size={25} className="pt-1 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                </div>
                            </button>
                        </div>
                        <div className="lg:hidden block flex justify-center mt-8 md:hidden">
                            <button
                                className="flex items-center px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
                                type="submit"
                            >
                                Send Message <FiArrowRight className="ml-2" />
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;
