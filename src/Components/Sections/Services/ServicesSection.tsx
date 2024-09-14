import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { GoArrowUpRight } from 'react-icons/go';
import ServiceCard from './ServiceCard';

const ServicesSection: React.FC = () => {
    return (
        <div className='container h-auto font-serif mx-auto '>
            <hr className='container mx-auto' />
            <header className="flex flex-col items-center py-20 justify-center text-center ">
                <h1 className="text-4xl md:text-6xl font-medium text-gray-800 mb-6">
                    <span className='text-gray-500'>Let's talk</span> about your next Success?
                </h1>
                <p className="text-gray-600 text-md max-w-4xl">
                    Got a project or idea in mind? Let's make it happen. Reach out, and let's create something amazing together!
                </p>
            </header>
            {/* <div className='w-full flex items-center justify-between text-gray-700  '>
                <div className='space-y-2'>
                    <h1 className='text-6xl font-bold'>200+</h1>
                    <p className='text-xl '>Companies Helped</p>
                </div>
                <div className='space-y-2'>
                    <h1 className='text-6xl font-bold'>70+</h1>
                    <p className='text-xl '>5.0 Star Reviews</p>
                </div>
                <div className='space-y-2'>
                    <h1 className='text-6xl font-bold'>100+</h1>
                    <p className='text-xl '>Successful Projects</p>
                </div>
                <div className='space-y-2'>
                    <h1 className='text-6xl font-bold'>10+</h1>
                    <p className='text-xl '>Worked with Countries</p>
                </div>

            </div> */}

            <div className='space-y-20 '>

                <div className=' flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 justify-between'>

                    <div className='md:w-1/2 bg-gray-600  flex-shrink-0 flex items-center'>
                    </div>
                    <div className='md:w-1/2 space-y-8'>
                        <h1 className='text-6xl font-medium text-gray-800'>Website Development</h1>
                        <p className='text-xl text-gray-600'>
                            We specialize in crafting beautiful and functional websites using the latest technologies, including JavaScript, TypeScript, React.js, and Tailwind CSS. Whether you need a custom website, an e-commerce platform, or a content management system, we focus on creating responsive and user-friendly experiences that look great on any device. With a passion for UI/UX design and a knack for innovative solutions, we're here to help you build a strong online presence that stands out and resonates with your audience. Let's collaborate to create something extraordinary!
                        </p>
                        <div className='flex items-center space-x-6'>
                            <div className="md:flex cursor-pointer mt-3">
                                <RouterLink to="contact" className="flex items-center justify-center text-gray-300 py-3 rounded-full bg-gray-800 px-6 border-2 font-normal text-xl group relative">
                                    <div className='flex items-center gap-1 justify-center group-hover:text-gray-300'>
                                        <span>Let's Talk</span>
                                        <GoArrowUpRight size={25} className="pt-1 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </div>
                                </RouterLink>
                            </div>
                            <div className="md:flex cursor-pointer mt-3">
                                <RouterLink to="contact" className="flex items-center justify-center text-gray-800 py-3 rounded-full hover:bg-gray-200 px-6 border-2 font-normal text-xl group relative">
                                    <div className='flex items-center gap-1 justify-center group-hover:text-gray-700'>
                                        <span>View Works</span>
                                    </div>
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container mx-auto flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 justify-between'>

                    <div className='md:w-1/2 space-y-8'>
                        <h1 className='text-6xl font-medium text-gray-800'>User Interface Design</h1>
                        <p className='text-xl text-gray-600'>
                            We’re dedicated to crafting intuitive and visually captivating interfaces using modern design principles and tools. From user research and wireframing to prototyping and user testing, we focus on creating designs that not only look stunning but also enhance usability and engagement. With a keen eye for detail and a deep understanding of user behavior, we ensure that every design decision is driven by a commitment to delivering a seamless and enjoyable user experience. Let's work together to transform your ideas into a compelling and user-friendly digital reality.
                        </p>
                        <div className='flex items-center space-x-6'>
                            <div className="md:flex cursor-pointer mt-3">
                                <RouterLink to="contact" className="flex items-center justify-center text-gray-300 py-3 rounded-full bg-gray-800 px-6 border-2 font-normal text-xl group relative">
                                    <div className='flex items-center gap-1 justify-center group-hover:text-gray-300'>
                                        <span>Let's Talk</span>
                                        <GoArrowUpRight size={25} className="pt-1 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </div>
                                </RouterLink>
                            </div>
                            <div className="md:flex cursor-pointer mt-3">
                                <RouterLink to="contact" className="flex items-center justify-center text-gray-800 py-3 rounded-full hover:bg-gray-200 px-6 border-2 font-normal text-xl group relative">
                                    <div className='flex items-center gap-1 justify-center group-hover:text-gray-700'>
                                        <span>View Works</span>
                                    </div>
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 bg-gray-600  flex-shrink-0 flex items-center'>
                    </div>

                </div>

                <div className='container mx-auto flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 justify-between'>
                    <div className='md:w-1/2 bg-gray-600  flex-shrink-0 flex items-center'>
                    </div>
                    <div className='md:w-1/2 space-y-8'>
                        <h1 className='text-6xl font-medium text-gray-800'>User Experience Research</h1>
                        <p className='text-xl text-gray-600'>
                            Already have a website but struggling to attract orders or engagement? Our user research services are here to help. We delve into user behavior, preferences, and pain points to uncover the insights needed to transform your online presence. Through a blend of qualitative and quantitative methods, such as user interviews, surveys, and usability testing, we gather the data that drives informed design and development decisions. Let’s collaborate to understand your audience better and enhance their experience, ensuring your website performs at its best.
                        </p>
                        <div className='flex items-center space-x-6'>
                            <div className="md:flex cursor-pointer mt-3">
                                <RouterLink to="contact" className="flex items-center justify-center text-gray-300 py-3 rounded-full bg-gray-800 px-6 border-2 font-normal text-xl group relative">
                                    <div className='flex items-center gap-1 justify-center group-hover:text-gray-300'>
                                        <span>Let's Talk</span>
                                        <GoArrowUpRight size={25} className="pt-1 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </div>
                                </RouterLink>
                            </div>
                            <div className="md:flex cursor-pointer mt-3">
                                <RouterLink to="contact" className="flex items-center justify-center text-gray-800 py-3 rounded-full hover:bg-gray-200 px-6 border-2 font-normal text-xl group relative">
                                    <div className='flex items-center gap-1 justify-center group-hover:text-gray-700'>
                                        <span>View Works</span>
                                    </div>
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container mx-auto flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 justify-between'>

                    <div className='md:w-1/2 space-y-8'>
                        <h1 className='text-6xl font-medium text-gray-800'>Front End Development</h1>
                        <p className='text-xl text-gray-600'>
                            Leveraging the latest technologies such as JavaScript, TypeScript, React.js, and Tailwind CSS, we build dynamic and responsive interfaces that bring your vision to life. From crafting sleek, user-friendly designs to ensuring seamless functionality across all devices, we focus on creating a memorable and intuitive experience for your users. Let’s work together to turn your ideas into a visually stunning and highly functional website.

                        </p>
                        <div className='flex items-center space-x-6'>
                            <div className="md:flex cursor-pointer mt-3">
                                <RouterLink to="contact" className="flex items-center justify-center text-gray-300 py-3 rounded-full bg-gray-800 px-6 border-2 font-normal text-xl group relative">
                                    <div className='flex items-center gap-1 justify-center group-hover:text-gray-300'>
                                        <span>Let's Talk</span>
                                        <GoArrowUpRight size={25} className="pt-1 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </div>
                                </RouterLink>
                            </div>
                            <div className="md:flex cursor-pointer mt-3">
                                <RouterLink to="contact" className="flex items-center justify-center text-gray-800 py-3 rounded-full hover:bg-gray-200 px-6 border-2 font-normal text-xl group relative">
                                    <div className='flex items-center gap-1 justify-center group-hover:text-gray-700'>
                                        <span>View Works</span>
                                    </div>
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 bg-gray-600  flex-shrink-0 flex items-center'>
                    </div>

                </div>

                <div className='container mx-auto flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 justify-between'>
                    <div className='md:w-1/2 bg-gray-600  flex-shrink-0 flex items-center'>
                    </div>
                    <div className='md:w-1/2 space-y-8'>
                        <h1 className='text-6xl font-medium text-gray-800'>Brand Designing</h1>
                        <p className='text-xl text-gray-600'>
                            We specialize in crafting visually compelling brand elements, including logos, color schemes, typography, and overall visual style, that reflect your brand's core values and resonate with your target audience. With a focus on consistency and creativity, we ensure that every design choice enhances your brand's presence and makes a lasting impression. Let’s collaborate to build a brand that not only looks great but also truly represents who you are.
                        </p>
                        <div className='flex items-center space-x-6'>
                            <div className="md:flex cursor-pointer mt-3">
                                <RouterLink to="contact" className="flex items-center justify-center text-gray-300 py-3 rounded-full bg-gray-800 px-6 border-2 font-normal text-xl group relative">
                                    <div className='flex items-center gap-1 justify-center group-hover:text-gray-300'>
                                        <span>Let's Talk</span>
                                        <GoArrowUpRight size={25} className="pt-1 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </div>
                                </RouterLink>
                            </div>
                            <div className="md:flex cursor-pointer mt-3">
                                <RouterLink to="contact" className="flex items-center justify-center text-gray-800 py-3 rounded-full hover:bg-gray-200 px-6 border-2 font-normal text-xl group relative">
                                    <div className='flex items-center gap-1 justify-center group-hover:text-gray-700'>
                                        <span>View Works</span>
                                    </div>
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex items-center justify-between my-20 space-x-10'>
                    <ServiceCard
                        // Adjust min-w and max-w as needed
                        heading="Project Management"
                        description="I take the time to thoroughly understand your project goals, objectives, and requirements. This involves active listening, asking questions, and clarifying expectations to ensure I'm on the same page as you."
                    />
                    <ServiceCard

                        heading="Process Development"
                        description="I work closely with you and your team to develop tailored solutions that meet your needs. This involves brainstorming, ideation, and prototyping to create effective processes and workflows that drive results."
                    />
                    <ServiceCard

                        heading="Quality Assurance"
                        description=" I ensure that every aspect of the project meets the highest standards of quality. This involves rigorous testing, review, and refinement to guarantee that your expectations and meets your business needs."
                    />
                </div>
            </div>

        </div >
    )
}

export default ServicesSection