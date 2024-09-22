import React, { useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';

import BlogSection from '../../Landing Page/Blog/Blog'; // Ensure the path is correct

const ContactSection = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        budget: 100 // Default budget value
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, subject: e.target.value });
    };

    const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, budget: parseInt(e.target.value) });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);

        // Example API call
        // axios.post('/your-api-endpoint', formData)
        //     .then(response => {
        //         console.log('Response:', response);
        //         // Optionally handle response or errors
        //     })
        //     .catch(error => {
        //         console.error('Error:', error);
        //     });

        // Reset form fields after submission
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            budget: 100 // Reset budget to default value
        });

        // Optionally refresh the page
        // window.location.reload();
    };

    return (
        <div className='container mx-auto font-serif'>
            <hr className='container mx-auto' />
            <header className="flex flex-col items-center py-20 justify-center text-center ">
                <h1 className="text-4xl md:text-6xl font-medium text-gray-800 mb-6">
                    <span className='text-gray-500'>Let's talk</span> about your next Success?
                </h1>
                <p className="text-gray-600 text-md max-w-4xl">
                    Got a project or idea in mind? Let's make it happen. Reach out, and let's create something amazing together!
                </p>
            </header>

            <div className='w-full'>
                <div className='w-full  flex items-center justify-center'>
                    <div className="bg-white  p-16 max-w-screen-lg w-full">
                        <form onSubmit={handleSubmit} className="">
                            <div className="mb-10 flex space-x-4">
                                <div className="w-1/2">
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
                                <div className="w-1/2">
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
                            <div className="mb-10 flex space-x-4">
                                <div className="w-1/2">
                                    <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="email">
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
                                <div className="w-1/2">
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

                            <div className="mb-10">
                                <label className="block text-gray-600 text-sm font-medium mb-4">
                                    What's in your mind?
                                </label>
                                <div className="flex space-x-4">
                                    <div>
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
                                    </div>
                                    <div>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                className="form-checkbox accent-gray-700 h-5 w-5 text-gray-600"
                                                value="Branding Designing"
                                                checked={formData.subject === "Branding Designing"}
                                                onChange={handleRadioChange}
                                                required
                                            />
                                            <span className="ml-2 text-gray-700">Brand Designing</span>
                                        </label>
                                    </div>
                                    <div>
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
                                    </div>
                                    <div>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                className="form-checkbox accent-gray-700 h-5 w-5 text-gray-600"
                                                value="Front End"
                                                checked={formData.subject === "Front End"}
                                                onChange={handleRadioChange}
                                                required
                                            />
                                            <span className="ml-2 text-gray-700">Front End Development</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                className="form-checkbox accent-gray-700 h-5 w-5 text-gray-600"
                                                value="UX Experience"
                                                checked={formData.subject === "UX Experience"}
                                                onChange={handleRadioChange}
                                                required
                                            />
                                            <span className="ml-2 text-gray-700">Other</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-10">
                                <label className="block text-gray-600 text-sm font-medium mb-4">
                                    How much is your budget range?
                                </label>
                                <div className=" w-2/3">
                                    <div>
                                        <input
                                            type="range"
                                            min="100"
                                            max="10000"
                                            step="100"
                                            value={formData.budget}
                                            onChange={handleRangeChange}
                                            className="w-full bg-gray-300 accent-gray-700 text-gray-600"
                                            required
                                        /></div>
                                    <div className='flex justify-between'>
                                        <span className="text-gray-600 text-sm">${formData.budget}</span>
                                        <span className="text-gray-600 text-sm">$10,000</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-10">
                                <label className="block text-gray-500 text-sm font-medium mb-2" htmlFor="message">
                                    Your Message
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

                            <div className="">
                                <button
                                    type="submit"
                                    className="flex items-center w-full justify-center text-gray-800 bg-gray-800 py-3 rounded-full px-6 border-2 text-lg group relative"
                                >
                                    <div className='flex items-center gap-1 justify-center text-gray-300'>
                                        <span className="">Send Message</span>
                                        <GoArrowUpRight size={25} className="pt-1 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <BlogSection />
        </div>
    );
};

export default ContactSection;
